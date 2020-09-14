/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// https://stackoverflow.com/questions/40568176/webpack-typescript-module-hot-does-not-exist
import webpack = require('webpack')

declare global {
  interface NodeModule {
    hot: {
      accept(dependencies: string[], callback: (updatedDependencies: string[]) => void): void
      accept(dependency: string, callback: () => void): void
      accept(errHandler?: (err: any) => void): void
      decline(dependencies: string[]): void;
      decline(dependency: string): void
      decline(): void

      dispose(callback: (data: any) => void): void
      addDisposeHandler(callback: (data: any) => void): void

      removeDisposeHandler(callback: (data: any) => void): void
    }
  }
}
