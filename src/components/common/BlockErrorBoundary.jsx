'use client';

import { Component } from 'react';

export default class BlockErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    if (process.env.NODE_ENV === 'development') {
      console.error(`Error in block ${this.props.blockName}:`, error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto bg-red-50 border-2 border-red-200 rounded-xl p-8">
            <div className="flex items-start gap-4">
              {/* Error Icon */}
              <div className="shrink-0">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-red-900 mb-2">
                  Block Error: {this.props.blockName}
                </h3>
                <p className="text-red-700 text-sm mb-4">
                  This block encountered an error and couldn&apos;t be displayed.
                </p>

                {process.env.NODE_ENV === 'development' && this.state.error && (
                  <details className="mt-4">
                    <summary className="cursor-pointer text-red-800 font-medium text-sm hover:text-red-900">
                      Error Details (Development Only)
                    </summary>
                    <pre className="mt-2 p-4 bg-red-100 rounded text-xs overflow-auto max-h-40 text-red-900">
                      {this.state.error.toString()}
                      {this.state.error.stack}
                    </pre>
                  </details>
                )}

                <button
                  onClick={() => this.setState({ hasError: false, error: null })}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
