
import type {ReactiveElement} from 'lit';
import {signal, effect} from '@preact/signals-core';

type ReactiveElementConstructor = new (...args: any[]) => ReactiveElement;

export function SignalWatcher<T extends ReactiveElementConstructor>(
    Base: T
): T {
  // Return Base class if it's already a SignalWatcher
  if( 'isSignalWatcherClass' in Base && Base.isSignalWatcherClass ) return Base;
  // Return extended Base class
  return class SignalWatcher extends Base {
    private __disposeEffect?: () => void;

    static isSignalWatcherClass = true;
    
    performUpdate() {
      if (!this.isUpdatePending) {
        return;
      }
      this.__disposeEffect?.();
      this.__disposeEffect = effect(() => {
        this.isUpdatePending = true;
        super.performUpdate();
      });
    }

    disconnectedCallback() {
				this.__disposeEffect?.();
        this.__disposeEffect = undefined;
        super.disconnectedCallback();
    }
  };
}
