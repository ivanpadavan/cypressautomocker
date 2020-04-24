/// <reference types="cypress" />

declare global {
  interface IMockEntry {
    method: string,
    path: string,
    query: string,
    request: string,
    response: string;
    status: number;
    statusText: string;
    contentType: string;
  }

  type automock = (filename: string, options?: {
    resolveMockFunc?: (
      request: { url: string, method: string },
      mockArray: Array<IMockEntry>,
      mock: IMockEntry) => IMockEntry
  }) => void;
  type automockEnd = () => void;
  type automockWaitOnPendingAPIs = () => void;
  type resetAutomockPendingCounter = () => void;

  namespace Cypress {
    interface Chainable<Subject = any> {
      automock: automock;
      automockEnd: automockEnd;
      automockWaitOnPendingAPIs: automockWaitOnPendingAPIs;
      resetAutomockPendingCounter: resetAutomockPendingCounter;
    }
  }
}

declare function installCypressHooks(): void;
export = installCypressHooks;
