"use client";

import React from "react";

/**
 * Error Boundary for individual ACF Blocks.
 * Prevents a single failing block from crashing the entire page.
 */
class BlockErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Block Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (process.env.NODE_ENV === "development") {
        return (
          <div className="bg-red-50 border-2 border-dashed border-red-200 p-8 text-center m-4 rounded-xl">
            <p className="text-red-700 font-mono text-sm">
              Block Error: <strong>{this.props.blockName || "Unknown"}</strong>
            </p>
            <p className="text-red-600 text-xs mt-2 italic">
              {this.state.error?.message || "Check console for details."}
            </p>
          </div>
        );
      }
      return null; // Don't show anything in production
    }

    return this.props.children;
  }
}

export default BlockErrorBoundary;
