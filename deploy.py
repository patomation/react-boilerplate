# DEPLOY
# A script to copy the contents of the dist directory into github pages
# Copies ./dist to ../patomation.github.io/projects/[Name Of The App]

# Imports
import shutil, errno, os, subprocess
from git import Repo

# Functions
def copyanything(src, dst):
    try:
        shutil.copytree(src, dst)
    except OSError as exc: # python >2.5
        if exc.errno == errno.ENOTDIR:
            shutil.copy(src, dst)
        else: raise

def getBranchName(path):
    repo = Repo(path)
    branch = repo.active_branch
    return branch.name

def gitPush(path):
    repo = Repo(path)
    repo.remotes.origin.push()

def gitAddCommit(path, commitMessage):
    repo = Repo(path)
    repo.git.add('.')
    repo.git.commit(message=commitMessage)


print 'DEPLOY SCRIPT'

# Get Name of App
branchName =  getBranchName(os.getcwd())
print branchName

# Run web pack just in case
p = subprocess.Popen("webpack")
p.communicate() # Wait untill command done
print 'Webpack Finished running'


# Copy index app.js and all images from dist folder
from distutils.dir_util import copy_tree
copy_tree('./dist', '/x/patomation.github.io/projects/'+branchName)
# Copy thumbnail
copyanything('./thumbnail.png', '/x/patomation.github.io/projects/'+branchName+'/thumbnail.png')


#Commit
gitAddCommit('/x/patomation.github.io', branchName +' project update')
gitPush('/x/patomation.github.io')







#
