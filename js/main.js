var portl = portl || {};
portl.cmd = portl.cmd || [];

var PATH_TO_WEB_ROOT = 'https://domo.town/';

if( !portl.loaded ) {

	portl.loaded = true;

	(async function() {

		// Begin Module & CSS Imports
		const imports = [
			// Lit
			import('./lit-all.min.js'),
			// Immer
			import('./immer.production.mjs'),
			// Bundle
			import('./bundle.js'),
		];

		// Await Module & CSS Imports
		const [
			// Lit
			Lit,
			// Immer
			immer,
			// Bundle
			{
				preactSignals,
				SignalWatcher,
				avatarGradient,
			},
		] = await Promise.all( imports );

		// Extract convenience vars from Lit
		const {LitElement, html, unsafeHTML, css, unsafeCSS, classMap, styleMap, ifDefined, Directive, AsyncDirective} = Lit;

		/**
		 * @typedef {{}} TemplateResult The result of calling html`` (Lit)
		 */

		const [directive, getDirectiveClass] = (function() {

			const directiveClassMap = new Map();
			const directive = function( DirectiveClass ) {

				const generator = Lit.directive( DirectiveClass );

				directiveClassMap.set(generator, DirectiveClass);

				return generator;

			};
			const getDirectiveClass = function( generatorOrDirectiveResult ) {

				return directiveClassMap.get(generatorOrDirectiveResult) ?? Lit.getDirectiveClass( generatorOrDirectiveResult );

			};

			return [directive, getDirectiveClass];

		})();

		const svgHtmlLib = {
			checkmark: (extraClasses = '') => html`
				<svg class="checkmark ${extraClasses}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" stroke="#4caf50" strokeWidth="5" strokeMiterlimit="10"><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
			`
		};

		let debug = false;

		class internal {

			/**
			 * Proxy for immer.produce
			 * @template T
			 * @param {T} baseState
			 * @param {(draftState: T) => void} recipe
			 * @returns {T}
			 */
			static mutate(baseState, recipe) {

				return immer.produce(baseState, recipe);

			}

			/**
			 * @param {any[]} arr 
			 */
			static arrayRemove(arr, itemToRemove) {

				const foundIndex = arr.indexOf(itemToRemove);

				if( foundIndex >= 0 ) {
					
					arr.splice(foundIndex, 1);
					return true;

				}

			}

			/**
			 * @template T
			 * @param {T} obj
			 * @param {(key: string, val: T[keyof T], obj: T) => any} callback
			 */
			static forOwn( obj, callback ) {

				Object.keys(obj).forEach(key => {

					callback(key, obj[key], obj);

				});

			}

			static getDuckTypedDescendants(parent, qualifyingPropertyName, stopTraversalOnMatch = true) {

				const descendants = [];

				/**
				 * Use a depth-first search (DFS) algorithm to traverse the DOM tree
				 * @param {Node} node
				 */
				const traverse = node => {

					if( node !== parent && qualifyingPropertyName in node ) {

						descendants.push(node);
						if( stopTraversalOnMatch ) return;  // Stop the traversal when a custom element node is encountered

					}

					for( const childNode of node.childNodes ) {

						traverse(childNode);

					}
					
				};

				traverse(parent);

				return descendants;

			}

			/**
			 * Generate repeatable random number using a seed
			 * @param {number|string} seed
			 * @param {number} [max]
			 * @param {number} [min]
			 */
			static seedRandom = (() => {

				var _strToInt = /** @param {string} str */(str) => {

						var hash = 0,
							i,
							chr;

						if( str.length === 0 ) return hash;

						for( i = 0; i < str.length; i++ ) {

							chr = str.charCodeAt(i);
							hash = ((hash << 5) - hash) + chr;
							hash |= 0; // Convert to 32bit integer

						}

						if( hash < 0 ) hash = -hash;

						return hash;

					};
				
				return (seed, max = 1, min = 0) => {
					
					if( typeof seed !== 'number' ) seed = _strToInt(seed+'');
		
					seed = (seed * 9301 + 49297) % 233280;
					const rnd = seed / 233280.0;
				
					return min + rnd * (max - min);
					
				};

			})();

			/**
			 * @param {ResizeObserverEntry} entry
			 * @returns {[number,number]}
			 * */
			static resizeObserverEntryToDimensions( entry ) {

				let width, height;

				if( entry.borderBoxSize ) {

					width = entry.borderBoxSize[0].inlineSize;
					height = entry.borderBoxSize[0].blockSize;

				} else {

					const rect = entry.target.getBoundingClientRect();

					width = rect.width;
					height = rect.height;

				}

				return [width, height];

			}

		}

		class PortalUtils {

			/** @param {Event} e */
			static stopDefault(e) {

				if( !e ) return;
				
				// Stop Default
				e.preventDefault();
				
				// Clear Selection
				if( window.getSelection ) window.getSelection()?.removeAllRanges();
		
				return false;

			}

			/**
			 * @typedef {Object} AjaxOptions
			 * @property {HTMLFormElement} form
			 * @property {JQuery<HTMLFormElement>} $form
			 * @property {FormController} formController Pass a formController to automatically handle processing and validation
			 * @property {*} data
			 * @property {boolean} ignoreAborted
			 * @property {(response: ServerResponse) => any} [success]
			 * @property {(response: ServerResponse) => any} [error]
			 * @property {(jqXHR: jqXHR, textStatus: jqRequestStatus) => any} [complete]
			 * @property {(response: ServerResponse) => any} [formError]
			 * @property {(response: ServerResponse) => any} [critical]
			 * @property {(jqXHR: jqXHR, textStatus: jqRequestErrorStatus, errorThrown: String)} [ajaxError]
			 * @property {(response?: ServerResponse) => any} [anyError]
			 * @property {CallableFunction} [progress]
			 * @property {true} [cancelComplete]
			 */

			/**
			 * @typedef {Object} ServerResponse_FormError
			 * @property {string} field
			 * @property {string} message
			 */

			/**
			 * @typedef {Object} ServerResponse
			 * @property {'success'|'critical'|'invalidTwitchAuthToken'|'formError'|'error'} status
			 * @property {String} message
			 * @property {Object} [data]
			 * @property {String} [data.newToken]
			 * @property {String} [data.sql]
			 * @property {ServerResponse_FormError[]} [data.errors]
			 */

			/**
			 * @typedef {XMLHttpRequest & PromiseLike & {overrideMimeType: CallableFunction}} jqXHR
			 */

			/**
			 * @typedef {'timeout'|'error'|'abort'|'parsererror'|null} jqRequestErrorStatus
			 * @typedef {'success'|'notmodified'|'nocontent'|jqRequestErrorStatus} jqRequestStatus
			 */

			/**
			 * IMPORTANT: make sure to `await twitchAuthorized` before calling
			 * @param {AjaxOptions|CallableFunction} options
			 * @return {jqXHR|false}
			 */
			static ajax( url, options ) {
				
				if( typeof options === 'function' ) {
					
					options = {
						success: options
					};
					
				}

				// Default options
				/** @type {AjaxOptions} */
				const defaultOptions = {
					ignoreAborted: true
				};

				options = Object.assign(defaultOptions, options);

				/**
				 * @param {ServerResponse} response
				 * @param {AjaxOptions} options
				 * */
				const handleAjaxResponse = async function( response, options, tryAgain, nthTry ) {

					const responseData = response.data;
		
					switch( response.status ) {
					
						case 'success':
							
							if( typeof options.success === 'function' ) {
								
								options.success( response );
								
							}
							
							break;
							
						case 'critical':
							
							if( responseData && responseData.sql ) console.log( responseData.sql );

							if( typeof options.anyError === 'function' ) {

								options.anyError( response );

							}
							
							if( typeof options.critical === 'function' ) {
								
								options.critical( response );
								
							}
							
							AlertDialogElement.create('Critical Error', response.message);
							
							break;
							
						case 'invalidTwitchAuthToken':
							
							// First try *or* new token was recently issued?
							if( nthTry === 0 || (nthTry <= 1 && internal.newTokenIssuedTs && (new Date()).getTime() - internal.newTokenIssuedTs <= 5000 ) ) {
								
								// prevent the original ajax from calling complete()
								options.cancelComplete = true;
								// Resend response (with updated token)
								tryAgain( nthTry + 1 );
								
							} else {
								
								AlertDialogElement.create('Critical Error', 'Invalid twitch auth token.');
								
							}
							
							break;
							
						case 'formError':

							if( typeof options.anyError === 'function' ) {

								options.anyError( response );

							}
							
							if( typeof options.formError === 'function' ) {
									
								options.formError( response );
								
							}
							
							break;
							
						case 'error':

							if( typeof options.anyError === 'function' ) {

								options.anyError( response );

							}
							
							if( typeof options.error === 'function' ) {
									
								options.error( response );
								
							} else {
								
								AlertDialogElement.create('Error', response.message);
								
							}
							
							break;
							
						default:

							if( typeof options.anyError === 'function' ) {

								options.anyError( response );

							}

							if( typeof options.critical === 'function' ) {

								if( !response.message ) response.message = 'An unknown error has occurred.';

								options.critical( response );

							}
								
							AlertDialogElement.create('Error', 'An unknown error has occurred.');

					}
					
				};
				
				// This builds and sends the request
				const tryAgain = function( nthTry = 0 ) {
				
					// Set up options in a "second try"-compatible way (don't mutate original options)
					/** @type {AjaxOptions} */
					const modOptions = $.extend(true, {}, options);
					
					modOptions.data = modOptions.data || {};

					const twitchToken = twitchAuth.token;
					
					if( typeof modOptions.data === 'object' ) {
						
						if( Array.isArray(modOptions.data) ) {
							
							modOptions.data.push({name:'twitchToken', value: twitchToken})
							
						} else {
							
							modOptions.data.twitchToken = twitchToken;
							
						}
						
					} else if( typeof modOptions.data === 'string' ) {
						
						if( modOptions.data.length > 0 ) modOptions.data += '&';
						
						modOptions.data += 'twitchToken=' + encodeURIComponent(twitchToken);
						
					}
					
					let formDataMode;
					
					if(
						// Using form data?
						modOptions.form || modOptions.$form ||
						// Data contains a File object?
						(modOptions.data && Object.values(modOptions.data).some(v => v instanceof File))
					) {
							
						// Use a FormData object
						formDataMode = true;
					
						// reference any existing options.data
						const oldData = modOptions.data;

						// init FormData with any options.form
						modOptions.data = new FormData( modOptions.form || modOptions.$form?.[0] || undefined );

						// add any old options.data to FormData object
						internal.forOwn(oldData, (key, val) => {

							modOptions.data.append(key, val);

						});
						
					}

					// FormController convenience options
					const formController = modOptions.formController;
					if( formController ) {

						if( nthTry === 0 ) {

							// Don't submit if form is already processing or done
							if( formController.processing || formController.formIsDone ) return false;

							// Form validation
							formController.clearError();
							formController.validate();
							if( formController.hasErrors() ) return false;

						}

						// Set processing state
						formController.processing = true;

						// Basic error handling (general form error)
						if( !modOptions.error ) modOptions.error = (response) => {

							formController.setError( response.message );

						};

						// Basic error handling (field errors)
						if( !modOptions.formError ) modOptions.formError = (response) => {

							formController.processAjaxErrors( response.data.errors );

						};

					}
						
					const jqueryAjaxOptions = {
						url: url,
						data: modOptions.data,
						type: 'post',
						dataType: 'json',
						success: function( response ) {

							if( formController ) formController.processing = false;
							
							handleAjaxResponse( response, modOptions, tryAgain, nthTry );
							
						},
						/**
						 * @param {jqXHR} jqXHR
						 * @param {jqRequestErrorStatus} textStatus
						 * @param {String} errorThrown
						 */
						error: function( jqXHR, textStatus, errorThrown ) {

							if( formController ) formController.processing = false;

							if( !(modOptions.ignoreAborted && textStatus === 'abort') ) {

								if( typeof modOptions.anyError === 'function' ) {

									modOptions.anyError();

								}

								if( typeof modOptions.ajaxError === 'function' ) {

									modOptions.ajaxError( jqXHR, textStatus, errorThrown );

								}
								
								AlertDialogElement.create('Error', 'An unknown error has occurred.');

							}
							
						},
						/**
						 * @param {jqXHR} jqXHR
						 * @param {jqRequestStatus} textStatus
						 */
						complete: function(jqXHR, textStatus) {
							
							if( !modOptions.cancelComplete && typeof modOptions.complete === 'function' ) {
									
								modOptions.complete(jqXHR, textStatus);
								
							}
							
						}
					};

					if( typeof modOptions.progress === 'function' ) {

						jqueryAjaxOptions.xhr = function() {

							var xhr = $.ajaxSettings.xhr(),
								curPercent;

							if( xhr.upload ) {

								xhr.upload.addEventListener('progress', /** @param {ProgressEvent} e */(e) => {

									var percent = 0,
										position = e.loaded || e.position,
										total = e.total;

									if( e.lengthComputable ) percent = position / total;

									if( typeof modOptions.progress === 'function' ) {

										if( curPercent !== percent ) modOptions.progress( percent );

									}

									curPercent = percent;

								}, true);

							}

							return xhr;

						};

					}
					
					if( formDataMode ) {

						jqueryAjaxOptions.cache = false;
						jqueryAjaxOptions.contentType = false;
						jqueryAjaxOptions.processData = false;
						
					}
				
					return $.ajax( jqueryAjaxOptions );
				
				};
				
				return tryAgain(); // (first try)
				
			}

			static loadCSS( href ) {

				const link = document.createElement("link");
				link.rel = "stylesheet";
				link.href = href;
				document.head.appendChild(link);

			}

			/**
			 * @callback binarySearchComparator
			 *  @param {any} valToFind
			 *  @param {any} arrayValueToCompare
			 */

			/**
			 * 
			 * @param {any[]} arr 
			 * @param {any} valToFind 
			 * @param {binarySearchComparator} comparator 
			 * @returns 
			 */
			static binarySearchArray(arr, valToFind, comparator) {

				return (function searchHelper(arr, left, right) {

					if( left > right ) return -1;

					let mid = Math.floor((left + right) / 2);
					let comparison = comparator(valToFind, arr[mid]);

					if( comparison == 0 ) return mid;
					if( comparison < 0 ) return searchHelper(arr, left, mid - 1);

					return searchHelper(arr, mid + 1, right);

				})(arr, 0, arr.length - 1);

			}

			static dereferenceObject(obj) {

				for( const key in obj) {
					
					// Unassign object and function references
					if( ['object','function'].indexOf( typeof obj[key] ) >= 0 ) {

						obj[key] = undefined;

					}

				}

			}

			/**
			 * @template T
			 * @param {T} targetObj
			 * @returns {T}
			 */
			static assignOwnProperties(targetObj, sourceObj) {

				for( const key of Object.keys(sourceObj) ) {

					if( key in targetObj ) targetObj[key] = sourceObj[key];

				}

				return targetObj;

			}

			/** @param {HTMLElement|Window} element */
			static getScrollParent(element, includeHidden = false) {

				let style = getComputedStyle( element ),
					excludeStaticParent = style.position === 'absolute',
					overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/;

				if( style.position === 'fixed' ) return window;

				for( let parent = element; (parent = parent.parentElement); ) {

					style = getComputedStyle( parent );

					if( excludeStaticParent && style.position === 'static' ) continue;

					if( overflowRegex.test(style.overflow + style.overflowY + style.overflowX) ) return parent;

				}

				return window;
				
			}
		
			static preloadImgWithPromise( url, options = {}) {
				
				let {
						tryCrossOriginFirst = false,
					} = options,
					image = new Image(),
					/** @type {Promise<HTMLImageElement>} */
					promise = new Promise((resolve, reject) => {

						if( tryCrossOriginFirst ) image.crossOrigin = 'anonymous';
						image.src = url;
		
						if( image.complete ) {

							if( image.naturalWidth ) {
		
								resolve( image );

							} else {
		
								reject( image );

							}
		
						} else {
		
							const fulfill = () => {
		
								image.removeEventListener('load', fulfill);
								image.removeEventListener('error', fulfill);
		
								if( image.naturalWidth ) {
		
									resolve( image );

								} else if( tryCrossOriginFirst ) {

									const newOptions = {...options};
									newOptions.tryCrossOriginFirst = false;

									// Try again without crossOrigin
									this.preloadImgWithPromise(url, newOptions).then( resolve, reject )
		
								} else {
		
									reject( image );
									
								}
		
							};
		
							image.addEventListener('load', fulfill);
							image.addEventListener('error', fulfill);
		
						}

					});

				return Object.assign(promise, {image});
				
			}
		
			static init() {

				const panelMode = window.location.pathname.endsWith('/panel.html');

				if( panelMode ) {

					document.documentElement.classList.add('h-full'); // <html>
					document.body.classList.add('h-full', 'overflow-hidden');

				}

				PortalUtils.loadCSS('css/sl-light.css');
				PortalUtils.loadCSS('css/sl-dark.css');
				
			}
				
		}

		/**
		 * @typedef {HTMLInputElement|HTMLTextAreaElement|HTMLElement} GeneralInputField
		 */

		/**
		 * Form field validator directive - to be attached to inputs with a .fieldController property
		 */
		class FieldValidatorDirective extends AsyncDirective {

			/**
			 * @typedef {Object} FieldValidatorOptions
			 * @property {string|number} [param] Primary parameter
			 * @property {string|() => string} [customErrorMessage]
			 * @property {boolean} [required]
			 * */

			/** @type {FieldValidatorOptions} */
			options;

			/** @type {FieldValidatorOptions} */
			static defaultOptions = {
				required: true
			};

			/** @type {FormFieldController} */
			fieldController;

			/** @return {string} */
			defaultErrorMessage() {}

			/** @return {boolean} */
			isValid() {}

			customErrorMessage() {

				const customErrorMessage = this.options.customErrorMessage;
					
				return typeof customErrorMessage === 'function' ? customErrorMessage() : customErrorMessage;

			}

			getError() {
			
				if( !this.isValid() ) {
					
					return this.customErrorMessage() ?? this.defaultErrorMessage();
					
				}

			}

			/**
			 * Gets called from fieldController when input (that previously triggered this validator's error) changes
			 * 
			 * Returns true if error was cleared
			 * */
			clearErrorOnChange() {

				if( !this.getError() ) {
					
					this.fieldController.clearError();
					return true;

				}

			}

			// Nothing happens here
			render() { return Lit.nothing; }

			get field() {

				return this.fieldController?.field;

			}

			hostReady() {

				return this.fieldController?.host?.ready() ?? Promise.reject();

			}

			trimmedInput() {

				return this.fieldController.trimmedValue();

			}

			/** Primary parameter */
			get param() {

				return this.options.param;

			}

			set param( newVal ) {

				this.options.param = newVal;

			}

			/**
			 * This is where options are passed
			 * i.e. <input ${Validators.MinLength(5)} />
			 * or <input ${Validators.VideoFile({customErrorMessage:'...', maxSizeBytes:500*1024*1024})}
			 */
			update(part, [options]) {

				this.options = Object.assign({}, this.constructor.defaultOptions, typeof options === 'object' ? options : {
					param: options
				});

				if( this.isConnected && !this.fieldController ) {

					this.fieldController = part.element.fieldController;
					this.fieldController.addValidator( this );

				}

				return this.render();

			}

			disconnected() {

				this.fieldController?.removeValidator( this );
				this.fieldController = undefined;

			}

		}

		/**
		 * Pass in an object => this.object
		 * Pass in a non-object => this.param (this.object.param)
		 */
		const Validators = {
			Required: directive(class _Validator extends FieldValidatorDirective {

				defaultErrorMessage() {
					
					return 'This field is required.';

				}

				isValid() {

					switch( this.field.type ) {

						case 'checkbox':

							return this.field.checked;

						default:

							return this.trimmedInput().length > 0;

					}

				}

			}),
			MinLength: directive(class _Validator extends FieldValidatorDirective {
		
				defaultErrorMessage() {
					
					return 'Min length: ' + this.param + ' characters.';
					
				}
				
				isValid() {
					
					return this.trimmedInput().length >= this.param;
					
				}

			}),
			MaxLength: directive(class _Validator extends FieldValidatorDirective {
		
				defaultErrorMessage() {
					
					return 'Max length: ' + this.param + ' characters.';
					
				}
				
				isValid() {
					
					return this.trimmedInput().length <= this.param;
					
				}

			}),
			/**
			 * @typedef {Object} _URLValidatorOptions
			 * @property {boolean} [allowMissingHttps]
			 * 
			 * @typedef {FieldValidatorOptions & _URLValidatorOptions} URLValidatorOptions
			 */
			/** @type {(options: URLValidatorOptions) => any} */
			URL: directive(class _Validator extends FieldValidatorDirective {

				constructor( ...args ) {

					super( ...args );

					/**
					 * @type {URLValidatorOptions}
					 */
					this.options;

				}
		
				defaultErrorMessage() {

					return 'Invalid URL.';

				}
				
				isValid() {

					if( !this.trimmedInput() && !this.options.required ) return true;

					const pattern = this.options.allowMissingHttps ? PatternLib.permissiveUrl : PatternLib.url;
					
					return pattern.test( this.trimmedInput() );
					
				}

			}),
		};

		/**
		 * @typedef {Object} _ControllerHost
		 * @property {(controller: *) => void} addController
		 * @property {(controller: *) => void} removeController
		 * @property {CallableFunction} requestUpdate
		 * @property {Promise<boolean>} updateComplete
		 * 
		 * @typedef {HTMLElement & _ControllerHost} ControllerHost
		 * */

		class FormController {

			/** @type {ControllerHost} */
			host;

			/** @type {HTMLFormElement|undefined} */
			form;

			/** @type {CallableFunction[]} */
			_submitEvents = [];

			/**
			 * Configurable custom validator that will be called in validate()
			 * @type {((this: FormController) => any)|undefined}
			 * */
			customValidator;

			get fields() {

				/** @type {GeneralInputField[]|undefined} */
				const formElements = this.form?.elements;

				return Array.from(formElements ?? []);

			}

			/** @type {FormFieldController[]} */
			get fieldControllers() {

				return this.fields?.map(field => FormFieldController.getControllerByElement(field))
					.filter(fc => fc) ?? [];

			}

			/** @return {GeneralInputField} */
			fieldElement( fieldName ) {

				return this.form?.[fieldName];

			}

			fieldController( fieldName ) {

				const fieldEl = this.fieldElement( fieldName );

				if( !fieldEl ) return fieldEl;

				return FormFieldController.getControllerByElement( fieldEl );

			}

			/** @param {ControllerHost} host */
			constructor( host ) {

				// Store a reference to the host
				this.host = host;
				// Register for lifecycle updates
				host.addController(this);

			}

			/** @param {HTMLFormElement|undefined} formEl */
			_formRef = ( formEl ) => {

				if( formEl ) {

					// Bind submit events
					for( const callback of this._submitEvents ) {

						formEl.addEventListener('submit', callback);

					}

				} else {

					// Unbind submit events
					for( const callback of this._submitEvents ) {

						this.form.removeEventListener('submit', callback);

					}

				}

				this.form = formEl;

			};

			attach() {

				// Calls directive which gets a reference to the form
				return Lit.ref( this._formRef );

			}

			submit() {

				/** @type {HTMLInputElement} */
				let hiddenSubmit = this.form.querySelector('.hidden-submit');

				if( !hiddenSubmit ) {

					hiddenSubmit = document.createElement('input');
					hiddenSubmit.type = 'submit';
					hiddenSubmit.classList.add('hidden-submit');

					this.form.appendChild( hiddenSubmit );

				}

				// Submit the form by "clicking" the hidden submit button
				hiddenSubmit.click();

			}

			// hostConnected()
			// hostDisconnected()
			// hostUpdate()
			// hostUpdated()

			/** Tracks form processing state */
			_processing = false;

			/** True when form is processing and takes >= 75ms */
			slowProcessing = false;
			_slowProcessingTimeoutId;

			get processing() {

				return this._processing;

			}

			set processing( newVal ) {

				this._processing = !!newVal;

				this.form?.classList.toggle('processing', this._processing);

				if( newVal ) {

					this._slowProcessingTimeoutId = this._slowProcessingTimeoutId ?? setTimeout(() => {
							
						this.slowProcessing = true;
						this.host.requestUpdate();
						
					}, 75);

				} else {

					clearTimeout( this._slowProcessingTimeoutId );
					this._slowProcessingTimeoutId = undefined;
					this.slowProcessing = false;

				}

				this.host.requestUpdate();

			}

			/**
			 * @param {ServerResponse_FormError[]} errors 
			 * @param {string[]} ignoreFields
			 * */
			processAjaxErrors( errors, ignoreFields = [] ) {

				const ignoreFieldMap = Object.fromEntries(ignoreFields.map(fieldName => [fieldName, true]));

				for( const error of errors ) {

					if( ignoreFieldMap[error.field] ) continue;

					// Try to get form field
					const fieldEl = this.form?.[error.field];

					if( fieldEl ) {

						// Try to get field controller
						const fieldController = FormFieldController.getControllerByElement( fieldEl );

						if( fieldController ) {

							// Set temporal error
							fieldController.setError( error.message, undefined, {
								temporal: true,
								dismissalArmingTime: 500,
							});

						}

					} else {

						throw `Unhandled error: field "${error.field}" does not exist`;

					}

				}

			}

			/** Top-of-form style error message */
			_formError;

			/** Set a top-of-form style error message */
			setError( formError ) {

				this._formError = formError;

				this.host.requestUpdate();

			}

			clearError() {

				this._formError = undefined;

				this.host.requestUpdate();

			}

			clearAllStatesAndEvents() {

				this.clearError();
				this.clearFormDone();
				this.clearFormSubmitEvents();
				this.customValidator = undefined;

			}

			/**
			 * Renders a top-of-form style error message
			 * @param {((error: String, stdErrTemplate: TemplateResult) => any)} [renderCallback]
			 * */
			renderError( renderCallback ) {

				if( this._formError ) {

					const stdErrTemplate = html`
						<div class="form-error border border-rose-600 bg-rose-50 rounded-lg py-2 px-3 mb-4">
							${this._formError}
						</div>
					`;

					if( renderCallback ) {

						return renderCallback(this._formError, stdErrTemplate);

					} else {

						return stdErrTemplate;

					}

				}

			}

			validate() {

				// Custom validator
				this.customValidator?.call( this );

				// Field validators
				this.fieldControllers.forEach(fieldController => fieldController.validate());

				return this;

			}
		
			hasErrors() {

				if( this._formError ) return true;

				const fieldControllers = this.fieldControllers;
				
				for( const fc of fieldControllers ) {
					
					if( fc.hasError() ) return true;
					
				}
				
				return false;
				
			}

			/** @param {(event: SubmitEvent) => any} callback */
			handleFormSubmit( callback, preventDefault = true ) {

				const submitEvent = e => {
					
					if( preventDefault ) e.preventDefault();

					if( this.processing ) return;
					if( this.formIsDone ) return;

					callback(e);
					
				};

				this._submitEvents.push( submitEvent );

				this.form?.addEventListener('submit', submitEvent);

			}

			clearFormSubmitEvents() {

				// Unbind submit events
				for( const callback of this._submitEvents ) {

					this.form.removeEventListener('submit', callback);

				}

				// Empty submit events
				this._submitEvents = [];

			}

			_changeEvents = ['input','change'];

			formIsDone = false;

			markFormDone( submitButtonLabel, clearFormDoneOnInteraction ) {

				if( this.formIsDone ) return;

				this.formIsDone = true;

				this.form.classList.add('done');

				const submitBtn = this.host.querySelector('dt-submit-button');
				submitBtn.done = true;

				if( submitButtonLabel ) {

					if( !this._originalSubmitLabel ) this._originalSubmitLabel = submitBtn.label;

					submitBtn.label = submitButtonLabel;

				}

				if( clearFormDoneOnInteraction ) {

					this._delegateClearFormDoneOnInteraction();

				} else {

					this._undelegateClearFormDoneOnInteraction();

				}

			}

			_delegateClearFormDoneOnInteraction() {

				if( !this._clearFormDoneOnInteractionDelegated ) {

					this._clearFormDoneOnInteractionDelegated = true;

					// Delegate interaction events
					['focus','change','keydown','keyup'].forEach(eventName => {

						this.form.addEventListener(eventName, this._clearFormDoneOnInteraction);

					});


				}

			}

			_undelegateClearFormDoneOnInteraction() {

				// Unbind delegated interaction events
				['focus','change','keydown','keyup'].forEach(eventName => {

					this.form.removeEventListener(eventName, this._clearFormDoneOnInteraction);

				});

			}

			/** @param {FocusEvent|KeyboardEvent|Event} e */
			_clearFormDoneOnInteraction = (e) => {

				if( e.target.form === this.form ) {

					this._undelegateClearFormDoneOnInteraction();

					this.clearFormDone();

				}

			};

			clearFormDone() {

				if( !this.formIsDone ) return;

				this.formIsDone = false;

				this.form.classList.remove('done');

				const submitBtn = this.host.querySelector('dt-submit-button');
				submitBtn.done = false;

				if( this._originalSubmitLabel ) {

					submitBtn.label = this._originalSubmitLabel;

				}

			}

		}

		class FormFieldController {

			/** @type {ControllerHost & DtFieldElement} */
			host;

			/** @type {string|true|undefined} Set to `true` to enable error styling with no message */
			error;

			/** @type {string} */
			errorClass;

			/** @type {boolean} Means the error can be dismissed either by typing or waiting */
			errorIsTemporal;

			/** @type {number|undefined} */
			temporalErrorTimeoutId;

			/** @type {number|undefined} Is set to a number when fading the error. */
			errorFadingDuration;
			
			/** @type {number|undefined} */
			temporalErrorMinTimeoutId;
			/** @type {number|undefined} */
			temporalErrorDismissalArmingTimeoutId;
			waitingToFadeTemporalError = false;

			/** @type {FieldValidatorDirective|undefined} */
			errorValidator;

			/** @type {FieldValidatorDirective[]} */
			validators = [];

			/** @type {GeneralInputField|undefined} */
			field;

			/** Tracks last input value on input/change */
			lastInputValue;

			/** @type {WeakMap<GeneralInputField,FormFieldController>} */
			static _fieldControllerMap = new WeakMap();

			/** @param {HTMLElement} el */
			static getControllerByElement( el ) {

				return this._fieldControllerMap.get( el );

			}

			trimmedValue() {

				return this.field?.value.trim();

			}

			/** @param {ControllerHost} host */
			constructor( host ) {

				// Store a reference to the host
				this.host = host;
				// Register for lifecycle updates
				host.addController(this);

			}

			_changeEvents = ['input','change'];

			/** @param {Event} e */
			_handleChangeEvent = (e) => {

				this.errorValidator?.clearErrorOnChange?.();

				// If we have a temporal error and value changes, start fading the error (after arming time delay)
				if( this.errorIsTemporal && this.host.value !== this.lastInputValue && !this.temporalErrorDismissalArmingTimeoutId && !this.errorFadingDuration ) {

					if( this.temporalErrorMinTimeoutId ) { // but respect the min error delay

						this.waitingToFadeTemporalError = true;

					} else {

						this.fadeError();

					}

				}

				this.lastInputValue = this.host.value;

			};

			/**
			 * Handles input field set / unset
			 * @param {GeneralInputField|undefined} inputField
			 * */
			_fieldRef = ( inputField ) => {

				if( inputField ) {

					FormFieldController._fieldControllerMap.set( inputField, this );

					// Bind change events
					this._changeEvents.forEach(eventName => inputField.addEventListener(eventName, this._handleChangeEvent));

					// Init lastHostValue
					this.lastInputValue = this.host.value;

				} else {

					FormFieldController._fieldControllerMap.delete( this.field );

					// Unbind change events
					this._changeEvents.forEach(eventName => this.field.removeEventListener(eventName, this._handleChangeEvent));

					// Empty lastHostValue
					this.lastInputValue = undefined;

				}

				this.field = inputField;

			};

			attach() {

				// Calls directive which passes a reference to the input field to our callback
				return Lit.ref( this._fieldRef );

			}

			getSiblingController( fieldName ) {

				let field = this.field?.form[ fieldName ];

				if( field ) {

					return FormFieldController.getControllerByElement( field );

				}

			}

			/** @param {FieldValidatorDirective} validator */
			addValidator( validator ) {

				if( this.validators.indexOf( validator ) === -1 ) {

					this.validators.push( validator );

				}

			}

			/** @param {FieldValidatorDirective} validator */
			removeValidator( validator ) {

				internal.arrayRemove(this.validators, validator);

			}

			/** @param {CallableFunction} type Pass in Validators.ValidatorName */
			getValidatorsByType( type ) {

				const matches = [];
				for( const validator of this.validators ) {

					if( validator instanceof getDirectiveClass( type ) ) matches.push( validator );

				}

				return matches;

			}

			validate() {

				// Clear error
				this.clearError();

				// Run validators
				for( const validator of this.validators ) {

					let error = validator.getError();

					if( error ) {

						this.setError(error, validator);

						break;

					}

				}

				return this;

			}

			/**
			 * @param {string} errorMessage 
			 * @param {FieldValidatorDirective} [errorValidator]
			 * @param {Object} options
			 * @param {string} [options.errorClass]
			 * @param {boolean} [options.temporal] Means the error can be dismissed by typing
			 * @param {number|true} [options.fadeDelay] How long the error will display (with no user input). Error will be faded early on user input.
			 * @param {number|true} [options.minFadeDelay] The minimum time the error will display regardless of user input, defaults to `true` if `fadeDelay` is set.
			 * @param {number|true} [options.dismissalArmingTime] How long we give the user to notice the message before we enable dismissal
			 */
			setError(errorMessage, errorValidator, {
				errorClass = undefined,
				temporal = undefined,
				fadeDelay = undefined,
				minFadeDelay = undefined,
				dismissalArmingTime = undefined,
			} = {}) {

				this.error = errorMessage;
				this.errorClass = errorClass;
				this.errorValidator = errorValidator;

				// Interpret fadeDelay, minFadeDelay
				if( fadeDelay === true ) fadeDelay = 30000;
				if( minFadeDelay === true || (fadeDelay && minFadeDelay === undefined) ) minFadeDelay = 3000;
				// fadeDelay must be at least minFadeDelay
				fadeDelay = fadeDelay ? Math.max(fadeDelay, minFadeDelay ?? 0) : minFadeDelay;

				if( temporal || fadeDelay || dismissalArmingTime ) {

					this.makeErrorTemporal( fadeDelay, minFadeDelay, dismissalArmingTime );

				} else {

					this.clearTemporalErrorTimeout();

				}

				this.host.requestUpdate();

			}

			/**
			 * @param {number} [dismissalArmingTime] How long we give the user to notice the message before we enable early dismissal
			 */
			makeErrorTemporal( fadeDelay, minFadeDelay, dismissalArmingTime = 1500 ) {

				// Clear any timeout first
				this.clearTemporalErrorTimeout();

				this.errorIsTemporal = true;

				if( fadeDelay ) {

					this.temporalErrorTimeoutId = setTimeout(() => this.fadeError(), fadeDelay);

				}

				if( minFadeDelay ) {

					this.temporalErrorMinTimeoutId = setTimeout(() => {

						this.temporalErrorMinTimeoutId = undefined;

						if( this.waitingToFadeTemporalError ) this.fadeError();

					}, minFadeDelay);

				}

				if( dismissalArmingTime ) {

					this.temporalErrorDismissalArmingTimeoutId = setTimeout(() => {

						this.temporalErrorDismissalArmingTimeoutId = undefined;

					}, dismissalArmingTime);

				}

			}

			clearTemporalErrorTimeout() {

				this.errorIsTemporal = false;
				this.errorFadingDuration = undefined;
				this.waitingToFadeTemporalError = false;

				const id = this.temporalErrorTimeoutId;

				if( id ) {

					clearTimeout( id );
					this.temporalErrorTimeoutId = undefined;

				}

				const minId = this.temporalErrorMinTimeoutId;

				if( minId ) {

					clearTimeout( minId );
					this.temporalErrorMinTimeoutId = undefined;

				}

				const armingId = this.temporalErrorDismissalArmingTimeoutId;

				if( armingId ) {

					clearTimeout( armingId );
					this.temporalErrorDismissalArmingTimeoutId = undefined;

				}

			}

			clearError() {
				
				this.clearTemporalErrorTimeout();

				this.error = undefined;
				this.errorValidator = undefined;

				this.host.requestUpdate();

			}

			fadeError( duration = 400 ) {

				// Clear any timeout first
				this.clearTemporalErrorTimeout();

				// Set timeout to clear the error
				this.temporalErrorTimeoutId = setTimeout(() => {

					this.clearError();

				}, duration);

				// Begin fading the error
				this.errorFadingDuration = duration;

				this.host.requestUpdate();

			}

			hasError() {

				return this.error && !this.errorFadingDuration;

			}

			errorVisible() {

				return this.error;

			}

			fieldErrorClass() {

				return this.errorVisible() ? (this.errorClass ?? 'field-error') : '';

			}

			/** @param {(error: String) => any} [renderCallback] */
			renderError( renderCallback ) {

				if( this.errorVisible() ) {

					// If error is simply set to true, render no message by default
					if( this.error === true ) return renderCallback?.( true );

					const renderErrorInner = ( innerHtmlTemplate ) => {

						const fadeDelay = this.errorFadingDuration;

						return html`
							<div
								class="flex transition-opacity ease-in ${fadeDelay ? 'opacity-0' : 'opacity-100'}"
								style="${fadeDelay ? `transition-duration: ${fadeDelay}ms` : ''}"
							>
								${innerHtmlTemplate}
							</div>
						`;

					};

					if( renderCallback ) {

						return renderErrorInner(
							renderCallback( this.error )
						);

					} else {

						let commonClasses = 'field-message text-sm';

						switch( this.field.type ) {

							case 'checkbox':

								return renderErrorInner(html`
									<div class="${commonClasses} flex items-center mt-1">
										<svg class="stroke-current w-4 h-4 mr-1.5" style="margin-left: .05rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
											<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
										</svg>
										${this.error}
									</div>
								`);

							default:

								return renderErrorInner(html`
									<div class="${commonClasses} mt-2">
										${this.error}
									</div>
								`);

						}

					}

				}

			}

			// hostConnected()
			// hostDisconnected()
			// hostUpdate()
			// hostUpdated()

		}

		class HDImage_Size {

			src;
			width;
			height;
		
			constructor(width, height, src) {
		
				this.src = src;
				this.width = width;
				this.height = height;
		
			}
		
		}
		
		class HDImage {
		
			/** @type {HDImage_Size[]} */
			sizes;
		
			/** @param {HDImage_Size[]} [sizes] */
			constructor( sizes ) {
		
				this.sizes = [];
		
				if( sizes && sizes.length ) {
		
					for( const size of sizes ) this.addSize( size );
		
				}
		
			}
		
			/** @param {HDImage_Size} size */
			addSize( size ) {
		
				if( this.sizes.length < 1 ) {
		
					this.sizes.push( size );
		
				} else {
		
					let insertIndex = PortalUtils.binarySearchArray(this.sizes, size, (s1, s2) => {

						return (s1.width && s2.width) ? s1.width - s2.width : s1.height - s2.height;

					});
		
					if( insertIndex < 0 ) insertIndex = ~insertIndex;
		
					this.sizes.splice(insertIndex, 0, size);
		
				}
		
			}
		
			selectSize( renderWidth, renderHeight ) {
		
				if( renderHeight && this.sizes[0].height ) {
		
					let yPixels = window.devicePixelRatio * renderHeight;
		
					for( const size of this.sizes ) {
		
						if( size.height >= yPixels ) return size;
		
					}
		
					return this.sizes[this.sizes.length - 1];
		
				} else {
		
					let xPixels = window.devicePixelRatio * renderWidth;
		
					for( const size of this.sizes ) {
		
						if( size.width >= xPixels ) return size;
		
					}
		
					return this.sizes[this.sizes.length - 1];
		
				}
		
			}
		
		}

		class UploadedImagePath {

			static uploadedMediaDir = 'media/';

			// Defined by child class
			/** @type {string} */
			static imageTypeDir;
			/** @type {number[]} */
			static variantWidths;
			/** @type {number|undefined} */
			static aspectRatio;

			static get hdImageTemplate() {

				if( !this._hdImageTemplate ) {

					const ar = this.aspectRatio;
	
					/** @type {number[]} */
					const variantWidths = this.variantWidths;

					if( !variantWidths ) throw "No variant widths defined";

					/** @type {HDImage_Size[]} */
					const hdImageSizes = [];

					variantWidths.forEach((width, i) => {

						// src-less
						hdImageSizes.push(new HDImage_Size(
							width,
							ar ? width * ar : undefined
						));

					});

					this._hdImageTemplate = new HDImage( hdImageSizes );

				}

				return this._hdImageTemplate;

			}

			static uploadedMediaRootDir() {
		
				return PATH_TO_WEB_ROOT + this.uploadedMediaDir;
		
			}
		
			static imageTypeRootDir() {
		
				if( !this.imageTypeDir ) throw 'imageTypeDir is not defined';
		
				return this.uploadedMediaRootDir() + this.imageTypeDir;
		
			}
		
			baseFilename;
			fileExtensionByVariant = {};
		
			constructor( baseFilename ) {

				this.baseFilename = baseFilename;
				
			}

			addVariant(variant = '', fileExtension) {

				if( variant === 'orig' ) variant = '';

				this.fileExtensionByVariant[variant] = fileExtension;

			}

			// Optionally defined by child class
			static _imageDirectory( baseFilename ) {
		
				return this.imageTypeRootDir() +
					baseFilename[0] + '/' +
					baseFilename[1] + '/' +
					baseFilename[2] + '/' +
					baseFilename[3] + '/' +
					baseFilename + '/';

			}
		
			imageDirectory() {
		
				return this.constructor._imageDirectory( this.baseFilename );
		
			}
		
			variantFilename( variant = '', fileExtension ) {

				fileExtension = fileExtension ? fileExtension.toLowerCase() : this.fileExtensionByVariant[variant];
		
				return fileExtension && (this.baseFilename + '_' + (variant || 'orig') + '.' + fileExtension);
		
			}
		
			variantFilepath( variant, fileExtension ) {

				const variantFilename = this.variantFilename( variant, fileExtension );
		
				return variantFilename && (this.imageDirectory() + variantFilename);
		
			}

			codedFilename() {

				let parts = [this.baseFilename],
					variantsByFileExtension = {};

				// abcd1234/orig.jpeg/90,45.webp
				for( const variant in this.fileExtensionByVariant ) {

					const fileExtension = this.fileExtensionByVariant[variant];

					if( !variantsByFileExtension[fileExtension] ) variantsByFileExtension[fileExtension] = [];

					variantsByFileExtension[fileExtension].push(variant || 'orig');

				}

				for( const fileExtension in variantsByFileExtension ) {

					const variants = variantsByFileExtension[fileExtension];

					parts.push(variants.join(',') + '.' + fileExtension);

				}

				return parts.join('/');

			}
		
			static fromCodedFilename( codedFilename ) {

				// a25fxjJC/orig,1780,890.jpeg/400.webp

				const parts = codedFilename.split('/');
				const uploadedImagePath = new this(parts[0]); // a25fxjJC

				for( let i = 1; i < parts.length; i++ ) { // 1: orig,1780,890.jpeg // 2: 400.webp

					const [variants, fileExtension] = parts[i].split('.'); // variants: orig,1780,890 // fileExtension: jpeg

					for( const variant of variants.split(',') ) { // (1) orig, 1780, 890 (2) 400

						uploadedImagePath.addVariant(variant, fileExtension);

					}

				}

				return uploadedImagePath;

			}

			toHDImage() { // Create from template

				/** @type {HDImage} */
				const hdImageTemplate = this.constructor.hdImageTemplate;

				const hdImage = new HDImage;
				
				// Template sizes are already ordered - skip addSize()
				hdImage.sizes = hdImageTemplate.sizes.map(size => {

					const filepath = this.variantFilepath(size.width === this.constructor.variantWidths[0] ? undefined : size.width);

					return filepath && new HDImage_Size(size.width, size.height, filepath);

				}).filter(hdSize => hdSize);

				return hdImage;

			}

		}

		class UserAvatarPath extends UploadedImagePath {

			static imageTypeDir = 'user/avatar/';
			static variantWidths = [
				180,
				90,
				45
			];
			static aspectRatio = 1;

		}

		class PostImagePath extends UploadedImagePath {

			static imageTypeDir = 'post/';
			static variantWidths = [
				3840,
				1780,
				890,
				400,
			];

		}

		class UserBaseClass {

			/** @type {number} */
			id;
			/** @type {string} */
			username;
			/** @type {string} */
			avatar;

			profileUrl() {

				return PATH_TO_WEB_ROOT + '@' + this.username;

			}

			avatarSrc(renderWidth, renderHeight) {

				if( !this.avatar ) return;

				return UserAvatarPath.fromCodedFilename(this.avatar).toHDImage().selectSize(renderWidth, renderHeight).src;

			}

			/** @param {InstanceType<typeof this>} obj */
			static createFromObject( obj ) {

				if( obj instanceof this ) return obj;

				return PortalUtils.assignOwnProperties(new this, obj);

			}

		}

		class AbortableTask {

			taskAborted = false;
			taskStarted = false;
			taskCompleted = false;

			/** @type {(resolve: (value?: any) => void, reject: (reason?: any), ...additionalArgs) => void} */
			taskExecutor;

			/** @type {Promise|undefined} */
			promise;

			/**
			 * @param {(resolve: (value?: any) => void, reject: (reason?: any), ...additionalArgs) => void} taskExecutor
			 * */
			constructor(taskExecutor) {

				this.taskExecutor = taskExecutor;

			}

			abort( reason ) {

				if( this.taskCompleted || this.taskAborted ) return;

				this.taskAborted = true;

				// Call onAbort's in reverse
				for( let i = this.callablesOnAbort.length - 1; i >= 0; i-- ) {

					this.callablesOnAbort[i].call(undefined, reason);

				}

				this.complete();

			}

			/** Intended to be private */
			complete() {

				if( this.taskCompleted ) return;

				this.taskCompleted = true;

				// Call onComplete's
				for( const callable of this.callablesOnComplete ) {

					callable();

				}

			}

			/** @type {CallableFunction} */
			callablesOnAbort = [];

			/** @param {(reason: string) => void} callable */
			onAbort( callable ) {

				if( this.taskAborted ) {

					callable.call();

				} else {

					this.callablesOnAbort.push( callable );

				}

			}

			/** @param {CallableFunction} callable */
			offAbort( callable ) {

				internal.arrayRemove(this.callablesOnAbort, callable);

			}

			/** @type {CallableFunction[]} */
			callablesOnComplete = [];

			/** @param {(reason: string) => void} callable */
			onComplete( callable ) {

				if( this.taskCompleted ) {

					callable.call();

				} else {

					this.callablesOnComplete.push( callable );

				}

			}

			/** @param {CallableFunction} callable */
			offComplete( callable ) {

				internal.arrayRemove(this.callablesOnComplete, callable);

			}

			run(thisArg = this, ...additionalArgs) {

				if( this.taskAborted || this.taskStarted || this.taskCompleted ) return false;

				this.taskStarted = true;

				let promise = this.promise = new Promise((resolve, reject) => {

					this.onAbort((reason) => reject("Task aborted: " + reason));
					this.taskExecutor.call(thisArg, resolve, reject, ...additionalArgs);

				});

				promise.then(() => {

					this.complete();
					
				}, (reason) => {

					this.abort("Promise rejected externally: " + reason);

				});

				return promise;

			}

		}

		function HasCustomEvents( Base ) {

			Base ??= class _{};

			const _extended = class HasCustomEvents extends Base {

				static isHasCustomEventsType = true;

				events = {};

				/**
				 * @template T
				 * @param {T} eventType One of `this.events`
				 * @param {T[number]} callback
				 * */
				on(eventType, callback) {

					if( !callback ) return;
					if( !Object.values(this.events).includes(eventType) ) throw 'Tried to bind to non-existing eventType';

					if( eventType.indexOf(callback) === -1 ) eventType.push( callback );

				}

				/**
				 * @template T
				 * @param {T} eventType One of `this.events`
				 * @param {T[number]} callback
				 * */
				off(eventType, callback) {

					if( !callback ) return;
					if( !Object.values(this.events).includes(eventType) ) throw 'Tried to unbind to non-existing eventType';
					
					return internal.arrayRemove(eventType, callback);

				}

				/**
				 * @template T
				 * @param {T} eventType One of `this.events`
				 * @param {Parameters<T[number]>} args
				 * */
				callEvent(eventType, ...args) {

					if( !Object.values(this.events).includes(eventType) ) throw 'Tried to call non-existing eventType';
				
					for( const eventCallback of eventType ) {
						
						eventCallback( ...args );
						
					}

				}

				unbindAllEventCallbacks() {

					for( const key of Object.keys(this.events) ) {

						this.events[key] = [];

					}

				}

			};
			
			/** @type {typeof _extended} */
			const _base = Base;

			return _base.isHasCustomEventsType ? _base : _extended;

		}

		class Component {

			/** @type {Object.<string,AbortableTask} */
			abortables = {};

			abortAll( reason ) {

				// Abort all abortables
				internal.forOwn(this.abortables, (key, abortable) => {

					if( abortable ) abortable.abort( reason );

				});

			}

		}

		class Portal extends HasCustomEvents(Component) {

			/** @type {Object[]} */
			itemData = [];
			/** @type {PortalItemGeneric[]} */
			items;
			/** @type {PortalItemGeneric[]} */
			filteredItems;
			/** @type {Object.<string,PortalItemGeneric>} */
			itemsById = {};
			/** @type {PortalColumn[]} */
			columns;
		
			/** @type {JQuery} */
			$canvas;
			/** @type {JQuery} */
			$canvasInner;
		
			/**
			 * @typedef {Object} PortalSettings
			 * @property {number} fetchSize
			 * @property {number} imgLoadSensitivity
			 * @property {number} nsfwVisibility `0`: hidden, `1`: blur/warn, `2`: visible
			 * @property {'user'|'user-likes'|'collection'|undefined} mode
			 * @property {Object.<string, true>} excludeItemIds
			 * @property {number|false} videoHoverPlayDelay ms
			 */

			recalcDefaultImgLoadSensitivity() {

				return Math.max( 1000, this.scrollParentHeight );

			}

			/** @type {PortalSettings} */
			static defaultSettings = {
				fetchSize: 50,
				imgLoadSensitivity: window.innerHeight,
				mode: undefined,
				excludeItemIds: {},
				videoHoverPlayDelay: false,
			};

			/** @type {PortalSettings} */
			settings;
		
			/**
			 * @typedef {Object} PortalActiveFilters
			 * @property {number} userId
			 * @property {number} collectionId
			 * */
			
			/** @type {PortalActiveFilters} */
			activeFilters = {};
		
			state;
			timers;

			abortables = {
				/** @type {AbortableTask} */
				pendingItemFetch: undefined,
			};

			events = {
				/** @type {((portal: Portal) => any)[]} */
				portalEmpty: [],
				/** @type {{(data:{}):any}[]} */
				modifyRequestData: [],
				/** @type {CallableFunction[]} */
				beforePortalRemoved: [],
			};
			
			calc = {
				top: 0,
				bottom: 0,
				availableWidth: undefined,
				stdImgWidth: undefined,
			};

			/**
			 * @typedef {Object} PortalOptions
			 * 	@property {JQuery} $container
			 * 	@property {PortalSettings} settings
			 * 	@property {boolean} fullyLoaded
			 * 	@property {PortalActiveFilters} activeFilters
			 * 	@property {CachedPortalItemData} initItemData
			 * */

			/**
			 * @param {PortalOptions}
			 */
			constructor({
				$container = undefined,
				settings = {},
				fullyLoaded = undefined,
				activeFilters = undefined,
				initItemData = undefined,
			} = {}) {

				super();
		
				this.items = [];
				this.columns = [];

				this.filteredItems = [];
				
				const $canvas = this.$canvas = $('<div />').addClass('portalCanvas').appendTo( $container );
				this.$canvasInner = $('<div />').appendTo( $canvas );
				this.$emptyPortalContent = $('<div />').appendTo( $canvas );

				const scrollParent = PortalUtils.getScrollParent( $canvas[0] );
				this.$scrollParent = $(scrollParent);

				//
				// Handle window resizing with throttle
				//
				let doneSetup = false,
					lastResizeTs,
					resizeCheckInterval = false,
					resizeThrottleDelay = Math.floor(1000 / 30), // 1000 / fps
					/** @type {{restore: CallableFunction, portal: Portal}} */
					itemOffsetBookmark,
					handleResize = () => {

						this.settings.imgLoadSensitivity = this.recalcDefaultImgLoadSensitivity();

						this.fixCanvas();

						if( itemOffsetBookmark ) itemOffsetBookmark.restore();

						if( Date.now() - lastResizeTs > resizeThrottleDelay ) {

							// Looks like the user is done resizing (for now)

							clearInterval( resizeCheckInterval );

							itemOffsetBookmark = undefined;

							this.recalcAllItemTopOffset();
							this.loadUnloadedItems();

							resizeCheckInterval = false;

						}

					};
	
				this.scrollParentResizeObserver = new ResizeObserver((entries) => {

					let newScrollParentWidth;

					entries.forEach(entry => {

						const dims = internal.resizeObserverEntryToDimensions(entry);

						newScrollParentWidth = dims[0];
						this.scrollParentHeight = dims[1];
	
					});

					if( !doneSetup ) {
						
						doneSetup = true;

						scrollParent.addEventListener('scroll', this._handleParentScroll, {passive: true});
						
						this.fixCanvas( true, true );
		
						$canvas.on('mouseenter', '.iWrap', function() {
		
							let $iWrap = $(this);
		
							if( $iWrap.hasClass('placeholder') ) return;
		
							/** @type {PortalItem} */
							let portalItem = $iWrap.data('portalItem');
		
							portalItem.hoverOn();
		
						});
		
						$canvas.on('mouseleave', '.iWrap', function() {
		
							let $iWrap = $(this);
		
							if( $iWrap.hasClass('placeholder') ) return;
		
							/** @type {PortalItem} */
							let portalItem = $iWrap.data('portalItem');
		
							portalItem.hoverOff();
		
						});
		
						this.loadCachedItemData( initItemData );
		
						// Autoload items
						this.runScrollCheck();

					}

					lastResizeTs = Date.now();

					if( !itemOffsetBookmark ) {
						
						if(
							// only activate when scrolled past the top of the portal
							this.$scrollParent.scrollTop() > this.calc.top &&
							// and window width has changed
							newScrollParentWidth !== this.scrollParentWidth
						) {

							itemOffsetBookmark = this.bookmarkOffsetOfItemInViewport();

						}

					}

					this.scrollParentWidth = newScrollParentWidth;
		
					if( resizeCheckInterval ) return;

					resizeCheckInterval = setInterval(handleResize, resizeThrottleDelay);
	
				});
				this.scrollParentResizeObserver.observe( scrollParent === window ? document.body : scrollParent );
		
				// Set up excludeItemIds
				let excludeItemIds = settings.excludeItemIds ?? {};

				if( Array.isArray(excludeItemIds) ) {

					// Convert to object
					let _excludeItemIds = {};

					for( const id of excludeItemIds ) {

						_excludeItemIds[id] = true;

					}

					settings.excludeItemIds = _excludeItemIds;

				} else if( typeof excludeItemIds === 'object' ) {

					settings.excludeItemIds = excludeItemIds;

				}
		
				this.settings = settings;

				Object.setPrototypeOf(this.settings, Portal.defaultSettings);
		
				this.activeFilters = activeFilters;
		
				this.state = {
					fullyLoaded: fullyLoaded,
					rebuilding: false,
				};
		
			}

			/** @param {Event} e */
			_handleParentScroll = ( e ) => {

				this.runScrollCheck();

			};

			itemIdHiddenOrRemoved( itemId ) {

				return this.settings.excludeItemIds[itemId];

			}

			remove() {

				if( this.removed ) return; // already been removed

				this.callEvent( this.events.beforePortalRemoved );

				this.$scrollParent[0].removeEventListener('scroll', this._handleParentScroll);
				this.scrollParentResizeObserver.disconnect();

				this.empty();
				this.$canvas.remove();

				this.unbindAllEventCallbacks();
				
				PortalUtils.dereferenceObject( this );

				this.removed = true;

			}
				
			empty( removeItems = true ) {

				if( !removeItems ) {

					// Detach all items
					for( const item of this.filteredItems ) {

						item.detach();
						
					}

				}
				
				// Remove all columns
				for( const column of this.columns ) {
					
					column.remove();
					
				}

				this.columns = [];
				
				this.$canvasInner.empty();
				this.calc.bottom = 0;
				
				if( removeItems ) {

					for( const item of this.items ) {

						item.dispose();
						
					}

					this.state.fullyLoaded = false;
					this.itemData = [];
					this.items = [];
					this.filteredItems = [];

				}
				
			}

			refresh() {

				this.empty();
				this.fixCanvas(true, true);
				this.runScrollCheck();

			}
				
			/** @param {number} [threshold] */
			loadUnloadedItems( threshold, scrollTop ) {
				
				threshold ??= this.settings.imgLoadSensitivity;
				scrollTop ??= this.$scrollParent.scrollTop();
				
				var scrollBottom = this.scrollParentHeight + scrollTop;
				
				for( const column of this.columns ) {
						
					for( const item of column.unloadedItems ) {

						const itemTop = item.topOffset(),
							  itemBottom = item.bottomOffset();
						
						if( (itemTop >= scrollTop && itemTop <= scrollBottom + threshold)
							|| (itemBottom <= scrollBottom && itemBottom >= scrollTop - threshold) ) {
							
							item.loadSmall();
							
						}
						
					}
					
				}
				
			}
				
			shouldFetchItems( scrollTop ) {
				
				if( this.state.fullyLoaded ) return false;

				scrollTop ??= this.$scrollParent.scrollTop();
		
				// Check bottom proximity
				var scrollBottom = this.scrollParentHeight + scrollTop;

				return scrollBottom + this.settings.imgLoadSensitivity * 2 >= this.calc.bottom;
				
			}
				
			runScrollCheck( scrollTop ) {
				
				// Find all images unloaded within a {threshold}px range of the current view window and load them
				this.loadUnloadedItems( null, scrollTop );
				
				// Check bottom proximity
				if( this.shouldFetchItems( scrollTop ) ) {
					
					this.fetchMoreItems();
					
				}
				
			}

			globalMargins = 3;
		
			fixCanvas( forceRebuild = false, skipEmptyPortalCheck = false ) {
					
				let portal = this,
					canvasWidth = this.$canvas.width(),
					globalMargins = this.globalMargins,
					minStdImgWidth;

				// Do nothing if width hasn't changed and we're not forcing a rebuild
				if( !forceRebuild && canvasWidth === this.calc.availableWidth ) return;

				let availableWidth = this.calc.availableWidth = canvasWidth;

				if( availableWidth <= 200 ) {

					// 2 cols
					minStdImgWidth = Math.floor(availableWidth / 3);
				
				} else if( availableWidth <= 450 ) {
					
					// 3 cols
					minStdImgWidth = Math.floor(availableWidth / 4);
					
				} else {
					
					minStdImgWidth = 150;
					
				}
		
				let stdImgWidth = this.calc.stdImgWidth = Math.min(
					canvasWidth,
					//		available width							  width of each image
					( (canvasWidth + globalMargins) / Math.floor(canvasWidth / (minStdImgWidth + globalMargins)) ) - globalMargins
				);
				
				var tilesX = Math.ceil( availableWidth / (stdImgWidth + globalMargins) ),
					takenWidth = canvasWidth,
					extraFraction = Math.ceil(stdImgWidth) - stdImgWidth,
					rebuild = forceRebuild || (tilesX !== this.columns.length);
			
				// Empty contents, but not items
				if( rebuild ) this.empty( false );

				if( debug ) console.log('rebuild', rebuild);
			
				// Add each column
				for( var i = 0, over = 0, totalWidth = 0; i < tilesX; i++ ) {
					
					(function( i, last ) {
						
						if( over + extraFraction > 0 ) {
							
							var width = Math.floor(stdImgWidth)
							over -= extraFraction;
							
						} else {
		
							var width = Math.ceil(stdImgWidth)
							over += extraFraction;
							
						}
						
						totalWidth += width;
						
						if( last ) {
							
							if( totalWidth != takenWidth ) {
								
								width += takenWidth - totalWidth;
								
							}
							
						} else {
							
							totalWidth += globalMargins;
							
						}
						
						if( rebuild ) {
							
							portal.addColumn( new PortalColumn(portal, width, (i == 0 || i == tilesX - 1), (i == tilesX - 1 )) );

						} else {

							portal.columns[i].setWidth( width );

						}
						
					})( i, (i == tilesX - 1) );

				}
			
				this.$canvasInner.css({
					'width': takenWidth + 'px'
				});

				// Re-calc top
				this.calcTop();

				if( rebuild ) {

					this.$canvasInner.append( $('<div />').addClass('clear') );

					// Re-add every item
					this.filteredItems = [];
					for( const item of this.items ) {

						this.appendItem( item );

					}

					// Flush new items on each column
					for( const column of this.columns ) {
	
						column.flushNewItems( false );
	
					}

				} else {

					// Re-init every item
					for( const item of this.filteredItems ) {

						item.init(null, false);

					}

				}

				// Re-calc bottom
				this.calcBottom();

				// Check empty state
				if( !skipEmptyPortalCheck ) this.checkEmptyPortal();
				
			}

			/** Check if the portal is empty (no items) and fire a `portalEmpty` event if it is */
			checkEmptyPortal() {

				if( this.filteredItems.length || this.abortables.pendingItemFetch ) {

					this.$emptyPortalContent.empty();

				} else {

					this.callEvent( this.events.portalEmpty, this );

				}

			}

			/** Set the "empty portal" content */
			setEmptyPortalContent( content ) {

				this.$emptyPortalContent.empty().append(
					$('<div />').addClass('px-6 py-[5vh] text-center font-semibold text-gray-500').append(
						$(`<img src="${PATH_TO_WEB_ROOT}images/icons/no-content.png" class="no-content-icon" />`),
						content
					)
				);

			}

			recalcAllItemTopOffset() {

				this.filteredItems.forEach((item) => item.calcTopOffsetRelativeToPortalTop());

			}
				
			/** @param {PortalColumn} newCol */
			addColumn( newCol ) {
				
				this.columns.push( newCol );
				
			}
		
			/** @param {PortalItem} item */
			appendItem( item ) {

				// Don't add hidden or removed items
				if( this.itemIdHiddenOrRemoved(item.id) ) return;

				this.filteredItems.push( item );
				
				var shortestHeight = this.columns[0].height,
					shortestIndex = 0;
				
				// Find the shortest col and add to it
				for( var i = 1; i < this.columns.length; i++ ) {
					
					if( this.columns[i].height < shortestHeight ) {
						
						shortestHeight = this.columns[i].height;
						shortestIndex = i;
						
					}
					
				}
				
				this.columns[shortestIndex].addItem( item );
				
			}
		
			/** @param {PortalItem[]} newItems */
			addItems( newItems ) {
				
				if( !newItems ) return false;

				this.calcTop();
				
				for( const item of newItems ) {

					this.items.push( item );
					this.itemsById[item.id] = item;
					this.appendItem( item );
					
				}

				// Flush new items on each column
				for( const column of this.columns ) {

					column.flushNewItems();

				}

				this.calcBottom();

				// Check empty state
				this.checkEmptyPortal();

			}

			calcTop() {
		
				let innerOffset = this.$canvasInner.offset().top + this.$scrollParent.scrollTop() - this.$scrollParent.offset().top;
				
				this.calc.top = innerOffset;

			}

			calcBottom() {
		
				let innerHeight = this.$canvasInner.height();

				this.calc.bottom = this.calc.top + innerHeight;

			}

			calcTopAndBottom() {

				this.calcTop();
				this.calcBottom();

			}

			/** @param {CachedPortalItemData|undefined} cachedPortalItemData */
			loadCachedItemData( cachedPortalItemData ) {

				if( cachedPortalItemData ) {

					const {itemData, fullyLoaded} = cachedPortalItemData;

					if( itemData.length ) this.addItemsFromData( itemData );
					if( fullyLoaded ) this.state.fullyLoaded = true;

				}

			}

			/** @param {Object[]} arrItemData */
			addItemsFromData( arrItemData ) {

				this.itemData = [...this.itemData, ...arrItemData];

				return this.addItems(
					arrItemData.map(itemData => PortalItem.createItem( itemData ))
				);

			}
		
			fetchMoreItems() {
				
				if( this.abortables.pendingItemFetch ) {

					return this.abortables.pendingItemFetch;

				} else {
					
					if( this.filteredItems.length < 1 ) {
						
						this.$canvas.addClass('loading');
						
					}
		
					var data = {
						mode: this.settings.mode,
						limit: this.settings.fetchSize,
						nsfwVisibility: 0,
						twitchAuth: twitchAuth
					};

					let lastItem = this.items[this.items.length-1],
						after = lastItem?.sortVal;

					if( after !== undefined ) {

						// cursor-based pagination
						data.after = after;
						data.afterId = lastItem.id;

					} else {

						// offset-based pagination
						data.start = this.items.length;

					}
					
					switch( data.mode ) {
							
						case 'user':
		
							data.userId = this.activeFilters.userId;
							
							break;
						
						case 'user-likes':
		
							data.userId = this.activeFilters.userId;
							
							break;

						case 'collection':

							data.collectionId = this.activeFilters.collectionId;

							break;

						default:
							
							data.mode = '';
					
					}

					this.callEvent(this.events.modifyRequestData, data);

					let task = this.abortables.pendingItemFetch = new AbortableTask((resolve, reject) => {

						let jqXHR = PortalUtils.ajax(PATH_TO_WEB_ROOT + 'ajax/fetchPosts.php', {
							data: data,
							success: (response) => {
	
								if( this.$canvas ) {
									
									this.$canvas.removeClass('loading');
									
									if( response.data.items.length > 0 ) {

										this.addItemsFromData( response.data.items );

										if( response.data.endOfResults ) this.state.fullyLoaded = true;
										
										this.runScrollCheck();
										
									} else {
										
										this.state.fullyLoaded = true;
										this.checkEmptyPortal();
										
									}
	
								}

								resolve();

							},
							ajaxError: (xhr, textStatus, errorThrown) => {

								reject("ajax error " + textStatus + ": " + errorThrown);

							}
						});
						
						task.onAbort((reason) => {
							jqXHR.abort();
						});

					});

					task.onComplete(() => {
						
						if( this.abortables ) this.abortables.pendingItemFetch = undefined;

						this.checkEmptyPortal();
						
					});

					task.run();

					return task;
					
				}
				
			}

			getItemById( itemId ) {

				return this.itemsById[itemId];

			}

			/** @param {PortalItemGeneric} item */
			getItemOffsetRelativeToViewportTop( item, scrollTop ) {

				scrollTop ??= this.$scrollParent.scrollTop();

				return item.topOffset() - scrollTop;

			}

			bookmarkOffsetOfItemInViewport() {
				
				let scrollTop = this.$scrollParent.scrollTop(),
					scrollBottom = this.scrollParentHeight + scrollTop;

				// Get the top offset of an item whose top offset is in view
				let itemIndex = PortalUtils.binarySearchArray(this.filteredItems, null,
					
					/** @param {PortalItem} item */
					(ignore, item) => {

						const itemTop = item.topOffset();

						if( itemTop >= scrollTop && itemTop <= scrollBottom ) return 0;
						return scrollTop - itemTop;

					}
					
				);

				if( itemIndex >= 0 ) {

					let item = this.filteredItems[itemIndex],
						itemOffsetRelativeToViewportTop = this.getItemOffsetRelativeToViewportTop( item );

					return {
						
						/** Restores item view in window */
						restore: () => {

							item.calcTopOffsetRelativeToPortalTop();

							this.$scrollParent.scrollTop( item.topOffset() - itemOffsetRelativeToViewportTop );
						
						},

						portal: this,
					
					};

				}

			}
		
		}

		class PortalColumn {

			/** @type {Portal} */
			parentPortal;

			/** @type {PortalItemGeneric[]} */
			items = [];

			/** @type {PortalItemGeneric[]} */
			unloadedItems = [];

			/** @type {boolean} Whether or not the column is first or last */
			edgeCol;

			/** @type {boolean} Whether or not the column is last */
			lastCol;

			width = 0;
			height = 0;

			/** @type {JQuery} */
			$el;

			/** @type {PortalItemGeneric[]} */
			newItems = [];
			/** @type {JQuery} */
			$fragment;
		
			/**
			 * @param {Portal} parentPortal
			 * @param {number} width
			 * @param {boolean} edgeCol
			 * @param {boolean} lastCol
			 * */
			constructor( parentPortal, width, edgeCol, lastCol ) {
		
				this.parentPortal = parentPortal;
				this.edgeCol = edgeCol;
				this.lastCol = lastCol;
				this.$el = $('<div />').addClass('col').appendTo( parentPortal.$canvasInner );
				this.$fragment = $( document.createDocumentFragment() );
				this.setWidth( width );
				
				if( lastCol ) {
					
					this.$el.addClass('last');
					
				}
		
			}

			setWidth( width ) {

				this.width = width;
				this.$el.css('width', width + 'px');

			}

			remove() {

				this.$el.remove();

				PortalUtils.dereferenceObject( this );

			}
		
			addItem( item ) {
				
				this.items.push( item );
				this.newItems.push( item );
				this.appendItem( item );
				
			}

			/** @param {PortalItem} item */
			appendItem( item ) {

				item.init( this );

				this.$fragment.append( item.$el );
				
				// Increment recorded column height
				if( item.constrainedHeight ) this.height += item.constrainedHeight;
				
			}

			/** @param {PortalItem[]} newItems */
			flushNewItems( calcTopOffset = true ) {

				let newItems = this.newItems;

				// Flush $fragment items to $el
				this.$el.append( this.$fragment );

				let currentItems = this.items.length - newItems.length;

				newItems.forEach((item, i) => {

					if( calcTopOffset ) item.calcTopOffsetRelativeToPortalTop();

					if( currentItems + i <= 5 ) {

						item.loadSmall();

					} else {

						this.unloadedItems.push( item );

					}

				});

				// Create new fragment
				this.newItems = [];
				this.$fragment = $( document.createDocumentFragment() );

			}
		
		}

		class PostItem {

			constructor( data ) {

				const {type, width, height} = data;

				/** @type {'image'|'video'} */
				this.type = type;
	
				/** @type {number} */
				this.width = width;

				/** @type {number} */
				this.height = height;

			}

			/** @param {Object[]} rawPostItemDataArray */
			static fromArray( rawPostItemDataArray ) {

				return rawPostItemDataArray.map(rawData => {

					if( rawData.type === 'image' ) {

						return new PostImage( rawData );

					} else if( rawData.type === 'video' ) {

						return new PostVideo( rawData );

					}

				});

			}

		}

		class PostImage extends PostItem {

			constructor( data ) {

				super( data );

				/** @type {PostImagePath} */
				this.image = PostImagePath.fromCodedFilename( data.image );

			}

		}

		class PostVideo extends PostItem {

			constructor( data ) {

				super( data );

				const {poster} = data;

				/** @type {string} */
				this.poster = poster;

			}

		}

		/**
		 * @typedef {PortalImage|PortalVideo} PortalItemGeneric
		 */
		
		class PortalItem {

			id;

			/** @type {number|string|undefined} */
			sortVal;

			/** @type {'gallery'|'vertical'|undefined} */
			layout;

			/** @type {(PostImage|PostVideo)[]} */
			postItems;

			get width() {

				return this.postItems[0].width;

			}

			get height() {

				return this.postItems[0].height;

			}

			/** @type {PortalColumn} */
			parentColumn;
			/** @type {Portal} */
			parentPortal;

			constrainedWidth;
			constrainedHeight;

			/** @type {JQuery} */
			$iWrap;
			/** @type {JQuery} */
			$bWrap;
			/** @type {JQuery} */
			$img;
			/** @type {JQuery} */
			$imgInner;

			state = {
				hovering: false,
			};

			static createItem( itemData ) {

				/** @type {PostItem} */
				const firstItem = itemData.postItems[0];

				// PortalItem subtype is dertermined by first post item type
				switch( firstItem.type ) {

					case 'image': return new PortalImage( itemData );
					case 'video': return new PortalVideo( itemData );

				}

			}

			/** @param {PortalColumn} parentColumn */
			constructor( data ) {

				let {id, sortVal, layout, postItems} = data;

				this.id = id;

				this.sortVal = sortVal;

				this.layout = layout;

				this.postItems = PostItem.fromArray( postItems );

			}

			/** @return {JQuery} */
			get $el() {

				return this.$iWrap;

			}

			init( parentColumn, domEventsAndData ) {

				// Can be called repeatedly
				parentColumn = parentColumn ?? this.parentColumn;

				// Default: build dom, events and data if this portalItem has no existing $el
				domEventsAndData = domEventsAndData ?? !this.$el;

				this.parentColumn = parentColumn;
				this.parentPortal = parentColumn.parentPortal;

				let width = this.width,
					height = this.height,
					cWidth = this.constrainedWidth = parentColumn.width,
					cHeight = this.constrainedHeight = Math.floor(cWidth / width * height * 10) / 10;

				if( domEventsAndData ) {

					const iWrapClasses = ['iWrap','loading'];
					if( this.postItems.length > 1 ) iWrapClasses.push('multi-item-post');

					let $bWrap = this.$bWrap = $('<div />').addClass('bWrap'),
						$iWrap = this.$iWrap = $(`<a href="${this.url()}" class="${iWrapClasses.join(' ')}" target="_blank"></a>`).append(
							$bWrap
						).data('portalItem', this);

				}

				this.$iWrap.css({
					width: cWidth + 'px',
					height: cHeight + 'px'
				}).toggleClass('top', parentColumn.items.length === 1);

			}

			/** @type {number|undefined} */
			topOffsetRelativeToPortalTop;

			/** @type {number|undefined} Top offset relative to document top */
			topOffset() {

				let result = this.parentPortal?.calc.top + this.topOffsetRelativeToPortalTop;

				return result === NaN ? undefined : result;

			}

			bottomOffset() {

				const top = this.topOffset();

				if( top !== undefined ) return top + this.constrainedHeight;

			}

			detach() {

				this.$el.detach();

			}

			unassignPortalReferences() {

				// Remove all portal references
				this.parentColumn = undefined;
				this.parentPortal = undefined;

			}

			dispose() {

				// Remove all portal and DOM references
				this.unassignPortalReferences();

				this.$iWrap = undefined;
				this.$bWrap = undefined;
				this.$img = undefined;
				this.$imgInner = undefined;

			}

			static itemUrl( itemId ) {

				return PATH_TO_WEB_ROOT + 'i/' + itemId;

			}

			url() {

				return PortalItem.itemUrl( this.id );

			}
		
			async loadSmall( fadeInAnimation = true ) {}

			calcTopOffsetRelativeToPortalTop() {

				this.topOffsetRelativeToPortalTop = this.$iWrap.offset().top - this.parentPortal.calc.top;

			}

			hoverOn() {

				if( this.state.hovering ) return false;

				this.state.hovering = true;

			}

			hoverOff() {

				if( !this.state.hovering ) {
				
					return false;

				}

				this.state.hovering = false;

			}
		
		}

		class PortalImage extends PortalItem {

			smallSrc;

			constructor( data ) {

				super( data );

				this.smallSrc = this.image.variantFilepath(400);

			}

			get image() {

				/** @type {PostImage} */
				const firstPostItem = this.postItems[0];

				return firstPostItem.image;

			}

			/**
			 * @param {PortalColumn} parentColumn
			 * @param {boolean} [domEventsAndData]
			 */
			init( parentColumn, domEventsAndData ) {

				// Default: build dom, events and data if this portalItem has no existing $el
				domEventsAndData = domEventsAndData ?? !this.$el;

				super.init( parentColumn, domEventsAndData );

				if( domEventsAndData ) {

					this.$imgInner = $('<div class="img-inner" />');
					this.$img = $(`<div class="img portal-image" />`).append(
						this.$imgInner
					);

					this.$bWrap.append( this.$img );

				}

				this.$img.css({
					width: this.constrainedWidth + 'px',
					height: this.constrainedHeight + 'px'
				});

			}

			async loadSmall( fadeInAnimation = true ) {

				if( this.$iWrap?.hasClass('loading') ) {

					const img = await PortalUtils.preloadImgWithPromise(this.smallSrc);

					// Can be destroyed before image loads
					if( !this.$img ) return;

					this.$imgInner.css('background-image', 'url(' + this.smallSrc + ')');

					if( fadeInAnimation ) this.$iWrap.addClass('transitionOpacity');
					this.$iWrap.removeClass('loading');

				}

			}

		}

		class PortalVideo extends PortalItem {

			/** @type {true} */
			isVideo = true;

			/** @type {JQuery} */
			$poster;

			get posterSrc() {

				/** @type {PostVideo} */
				const firstPostItem = this.postItems[0];
				return firstPostItem.poster;

			}

			/**
			 * Only called within the context of being placed in a Portal
			 * (not if entry point is AppPage_WaterfallItemExpand)
			 * @param {PortalColumn} parentColumn
			 * @param {boolean} [domEventsAndData]
			 */
			init( parentColumn, domEventsAndData ) {

				// Default: build dom, events and data if this portalItem has no existing $el
				domEventsAndData = domEventsAndData ?? !this.$el;

				super.init( parentColumn, domEventsAndData );

				if( domEventsAndData ) {

					this.$imgInner = $('<div class="img-inner" />');
					this.$img = $('<div class="img portal-video" />').append(
						this.$imgInner
					);

					this.$bWrap.append( this.$img );

				}

				this.$img.css({
					width: this.constrainedWidth + 'px',
					height: this.constrainedHeight + 'px'
				});

			}

			dispose() {

				super.dispose();

				// Remove all DOM references
				this.$poster = undefined;

			}

			async loadSmall( fadeInAnimation = true ) {

				if( this.posterSrc ) {

					// Just load the poster
					if( !this.$poster ) {

						let $poster = this.$poster = $(`<div class="iOverlay video-poster"></div>`);

						// Attempt to load poster image
						PortalUtils.preloadImgWithPromise(this.posterSrc).then(() => {

							if( !this.$iWrap ) return;

							if( fadeInAnimation ) this.$iWrap.addClass('transitionOpacity');

							// Poster image loaded
							$poster.css('background-image', 'url(' + this.posterSrc + ')').appendTo(
								this.$imgInner
							);

							this.$iWrap.removeClass('loading');

						}).catch(() => 0);

					}

				}

			}

		}

		function EmitsDtResizeEvent( Base ) {

			const _extended = class EmitsDtResizeEvent extends Base {

				static get resizeObservedElements() {
	
					if( !this._resizeObservedElements ) {
	
						/** @type {Map<HTMLElement,InstanceType<typeof this>>} Maps our observables to their hosts */
						this._resizeObservedElements = new Map();
	
					}
	
					return this._resizeObservedElements;
	
				}

				static emitResizeEventEnabled = true;

				/**
				 * @param {(InstanceType<typeof this> & HTMLElement)?} host
				 * @param {[number,number]} size
				 * */
				static handleObservedResize( host, size ) {

					this.emitResizeEventEnabled && host?.dispatchEvent(
						new CustomEvent('dt-resize', {
							detail: {
								width: size[0],
								height: size[1]
							}
						})
					);

				}
	
				/**
				 * Static resize observer for all tracked elements
				 */
				static get resizeObserver() {
	
					if( !this._resizeObserver ) {
	
						this._resizeObserver = new ResizeObserver((entries) => {
	
							/** @type {Map<InstanceType<typeof this>,any>} */
							const uniqueTargets = new Map();
	
							entries.forEach(entry => {
	
								uniqueTargets.set(entry.target, internal.resizeObserverEntryToDimensions(entry));
			
							});
	
							uniqueTargets.forEach((size, el) => {

								// Attempt to get mapped host from our observable

								/** @type {(InstanceType<typeof this> & HTMLElement)?} */
								const host = this.resizeObservedElements.get(el);
								this.handleObservedResize( host, size );
	
							});
			
						});
	
					}
	
					return this._resizeObserver;
	
				}

				/** The thing to observe, customizable, defaults to `this` */
				resizeObservableEl() {

					return this;

				}
	
				observeResize() {
	
					/** @type {typeof EmitsDtResizeEvent} */
					const self = this.constructor;

					const observable = this.resizeObservableEl();
	
					if( observable && !self.resizeObservedElements.has(observable) ) {
	
						self.resizeObserver.observe( observable );
						self.resizeObservedElements.set( observable, this );
	
					}
	
				}
	
				unobserveResize() {
	
					/** @type {typeof EmitsDtResizeEvent} */
					const self = this.constructor;

					const observable = this.resizeObservableEl();

					if( observable ) {
	
						self.resizeObserver.unobserve( observable );
						self.resizeObservedElements.delete( observable );
		
						if( self.resizeObservedElements.size < 1 ) {
		
							// Nothing being observed
							self._resizeObservedElements = undefined;
							self._resizeObserver = undefined;
		
						}

					}
	
				}
	
				connectedCallback() {
	
					super.connectedCallback();
	
					this.observeResize();
	
				}
	
				disconnectedCallback() {
	
					super.disconnectedCallback();
	
					this.unobserveResize();
	
				}

			};
			
			/** @type {typeof _extended} */
			const _base = Base;

			return 'resizeObservedElements' in _base ? _base : _extended;

		}

		function TracksRenderedDimensions( Base ) {

			const _extended = class TracksRenderedDimensions extends EmitsDtResizeEvent(Base) {

				static properties = Object.assign({}, super.properties, {
					_renderedWidth: {state: true},
					_renderedHeight: {state: true},
				});

				constructor() {

					super();

					/** @type {number|undefined} */
					this._renderedWidth;
	
					/** @type {number|undefined} */
					this._renderedHeight;

				}

				// Don't emit @dt-resize by default
				static emitResizeEventEnabled = false;

				/**
				 * @param {(InstanceType<typeof this> & HTMLElement)?} host
				 * @param {[number,number]} size
				 * */
				static handleObservedResize( host, size ) {

					if( host ) {
	
						host._renderedWidth = size[0];
						host._renderedHeight = size[1];

					}

					super.handleObservedResize( host, size );

				}

			};
			
			/** @type {typeof _extended} */
			const _base = Base;

			return 'resizeObservedElements' in _base ? _base : _extended;

		}

		class ExtendedLitElement extends LitElement {

			static _tagNameMap = new Map();

			/** @param {string} tagName */
			static registerTag( tagName ) {

				this._tagNameMap.set(this, tagName);

				customElements.define(tagName, this);

			}

			static get tagName() {

				return this._tagNameMap.get( this );

			}

			async ready( requireEntireDomTreeReady = false ) {
		
				const thisUpdateComplete = await this.updateComplete;
		
				if( !requireEntireDomTreeReady ) return thisUpdateComplete;
		
				const descendantsUpdateComplete = await Promise.all(
					Array.from(
						internal.getDuckTypedDescendants(this, 'updateComplete'),
						node => typeof node.ready === 'function' ? node.ready(true) : node.updateComplete
					).filter(x => !!x)
				);
		
				return thisUpdateComplete && descendantsUpdateComplete.every(x => !!x);
		
			}

			/** @param {string[]} props */
			captureState( props ) {

				const state = {};

				for( const prop of props ) {

					state[prop] = this[prop];

				}

				return state;

			}

			restoreState( state ) {

				internal.forOwn(state, (key, val) => {

					this[key] = val;

				});

			}
		
		}

		class LightElement extends ExtendedLitElement {

			// Disables shadow DOM
			createRenderRoot() {
				return this;
			}

		}

		class AlertDialogElement extends LightElement {

			static properties = {
				label: {},
				message: {}
			};

			constructor() {

				super();

				/** @type {string} */
				this.label;

				/** @type {string} */
				this.message;

			}

			/**
			 * @param {string} label 
			 * @param {string} message 
			 */
			static async create(label, message) {

				const dialog = Object.assign(new this, {
					label,
					message
				});

				document.body.append( dialog );

				await dialog.ready();

				dialog.querySelector('sl-dialog').show();

			}

			render() {

				return html`
					<sl-dialog label=${this.label} class="dialog-overview" @sl-after-hide=${() => this.remove()}>
						${this.message}
						<sl-button slot="footer" class="dt-button dt-button-primary" @click=${e => e.target.closest('sl-dialog').hide()}>Ok</sl-button>
					</sl-dialog>
				`;

			}

		}
		AlertDialogElement.registerTag('dt-alert-dialog');

		class DtButtonElement extends LightElement {

			static properties = {
				label: {}
			};

			focus() {

				this.querySelector(':scope > button')?.focus();

			}

			renderLabel() {

				if( this.label ) {

					if( typeof this.label === 'function' ) {

						return this.label();

					} else {

						return this.label;

					}

				}

			}

		}

		class DtSubmitButtonElement extends DtButtonElement {

			static properties = Object.assign(super.properties, {
				done: {state: true}
			});

			constructor() {

				super();

				/** @type {string|CallableFunction} */
				this.label = 'Submit';

				/** State to indicate that the form has been completed */
				this.done = false;

			}

			_handleClick() {

				/** @type {HTMLInputElement} */
				const hiddenSubmit = this.querySelector('.hidden-submit');

				// Submit the form by "clicking" the hidden submit button
				hiddenSubmit?.click();

			}

			render() {

				return html`
					<input type="submit" class="hidden-submit" />
					<button type="button" class="submit button rounded-lg" @click=${this._handleClick}>
						<div>
							${this.done ? svgHtmlLib.checkmark() : ''}
							${this.renderLabel()}
						</div>
					</button>
				`;
				
			}

		}
		DtSubmitButtonElement.registerTag('dt-submit-button');

		/**
		 * @event dt-cancel Emitted when the cancel button is pressed.
		 */
		class DtCancelButtonElement extends DtButtonElement {

			constructor() {

				super();

				/** @type {string|CallableFunction} */
				this.label = 'Cancel';

			}

			handleClick() {

				this.dispatchEvent(new CustomEvent('dt-cancel'));

			}

			render() {

				return html`
					<button type="button" class="cancel button rounded-lg" @click=${this.handleClick}>
						<div>
							${this.renderLabel()}
						</div>
					</button>
				`;
				
			}

		}
		DtCancelButtonElement.registerTag('dt-cancel-button');

		class DtAvatarElement extends TracksRenderedDimensions(LightElement) {

			static properties = Object.assign({}, super.properties, {
				user: {state: true},
				community: {state: true},
				image: {},
				label: {},
				size: {},
				loading: {},
				defaultMode: {},
				hoverDarken: {attribute: 'hover-darken', type: Boolean},
			});

			constructor() {

				super();

				/** @type {'eager'|'lazy'} */
				this.loading = 'eager';

				/** @type {UserBaseClass|undefined} */
				this.user;

				/** @type {string|undefined} */
				this.image;

				/** @type {'smiley'|'initial'|undefined} */
				this.defaultMode;
			}

			getDefaultMode() {

				if( this.defaultMode ) {

					return this.defaultMode;

				} else if( this.user ) {

					return 'smiley';

				}

			}

			_seedMap = {};

			seed( salt = '' ) {

				if( this.user ) {

					return this.user.id + this.user.username + salt;

				} else {

					return this._seedMap[salt] ?? (this._seedMap[salt] = Math.random() * 100000);

				}

			}

			get avatarSrc() {

				if( this.image ) {

					return this.image;

				} else if( this.user?.avatar ) {

					if( this._renderedWidth && this._renderedHeight ) {

						return this.user.avatarSrc(this._renderedWidth, this._renderedHeight);

					} else {

						// Wait for rendered width/height
						return '';

					}

				}

			}

			/** @returns {string} */
			generateGradientSvg( darken = false ) {

				if( this.getDefaultMode() === 'initial' ) {
				
					return avatarGradient(this.seed('gradient')+'', darken ? 0.75 : 0.7, darken ? 0.74 : 0.8);

				} else {

					return avatarGradient(this.seed('gradient')+'', darken ? 0.98 : 1, darken ? 0.9 : 0.95);

				}

			}

			generatedStyle() {

				const styles = ['--dt-avatar-bg: transparent'];

				if( this.size ) {

					styles.push('--size: ' + this.size);

				}

				return styles.join('; ') || undefined;

			}

			_icon;

			render() {

				let icon, initials;

				if( this.avatarSrc !== undefined ) {

					// "Empty" sl-avatar(icon)
					icon = html`<div slot="icon"></div>`;

				} else {

					if( this.getDefaultMode() === 'initial' ) {

						initials = this.user?.username[0];

					} else if( this.getDefaultMode() === 'smiley' ) {

						if( this._icon ) {

							icon = this._icon;

						} else {

							icon = html`<div slot="icon"></div>`;

							fetch(`${PATH_TO_WEB_ROOT}images/svg/smileys/${internal.seedRandom(this.seed('39'), 38).toFixed()}.svg`)
								.then(response => response.text())
								.then(responseBody => {

									this._icon = html`
										<div slot="icon" class="seedvatar">${unsafeHTML(responseBody)}</div>
									`;
									this.requestUpdate();

								});

						}

					}

				}

				const _renderBg = ( darken = false ) => {
	
					if( this.avatarSrc === undefined ) {
	
						return html`
							<div class="default-avatar-bg ${darken ? 'dark' : ''} absolute inset-0">
								${unsafeHTML(this.generateGradientSvg(darken))}
							</div>
						`;
	
					}
	
				};

				return html`
					<div class="inline-flex relative">
						${_renderBg()}
						${this.hoverDarken ? _renderBg(true) : undefined}
						<sl-avatar
							.loading=${this.loading}
							.image=${this.avatarSrc}
							.initials=${initials}
							style="${ifDefined(this.generatedStyle())}"
							class="relative"
						>
							${icon}
						</sl-avatar>
					</div>
				`;

			}

		}
		DtAvatarElement.registerTag('dt-avatar');

		/** Twitch Extension Configuration view */
		class TwextConfig extends SignalWatcher(LightElement) {

			static properties = {
				confirmDisconnectRequired: {state: true}
			};

			formController = new FormController(this);

			constructor() {

				super();

				/** @type {true|undefined} */
				this.confirmDisconnectRequired;

				this.formController.handleFormSubmit(() => {

					if( getConnectedDomotownUser() ) {

						// "Disconnect"

						this.confirmDisconnectRequired = true;

					} else {

						// "Connect to DomoTown"

						const openedWindow = this.openedLoginWindow = window.open(
							PATH_TO_WEB_ROOT + 'twext/login.php?origin=' + encodeURIComponent(window.origin),
							'DtTwextLoginWindow',
							'width=380,height=600,location=yes,menubar=no,toolbar=no,status=no,resizable=no,scrollbars=yes'
						);
	
						openedWindow.addEventListener('close', () => this.openedLoginWindow = undefined);

					}

				});

			}

			connectedCallback() {

				super.connectedCallback();

				window.addEventListener('message', this._handleLoginWindowMessage);

			}

			disconnectedCallback() {

				super.disconnectedCallback();

				window.removeEventListener('message', this._handleLoginWindowMessage);

			}

			/**
			 * @param {'twitch-auth-data'} action
			 * @param {Object} data
			 */
			postToLoginWindow(action, data) {

				this.openedLoginWindow?.postMessage({
					dtMessageFlag: true,
					action: action,
					...(data ?? {})
				}, 'https://domo.town');

			}

			/** @param {MessageEvent} e */
			async handleLoginWindowMessage( e ) {

				const data = e.data,
				openedLoginWindow = this.openedLoginWindow;

				if( e.origin === 'https://domo.town' && e.source === openedLoginWindow && data.dtMessageFlag ) {

					switch( data.action ) {

						case 'dt-login-page-ready': // Login popup loaded & ready

							await twitchAuthorized;

							this.postToLoginWindow('twitch-auth-data', { twitchAuth });

							break;

						case 'dt-handle-login': // User was logged in

							// update connected user
							if( data.user ) connectedDomotownUserSignal.value = UserBaseClass.createFromObject( data.user );

							openedLoginWindow?.close();

							break;

					}

				}

			}
			_handleLoginWindowMessage = e => this.handleLoginWindowMessage( e );

			/** @param {MouseEvent} e */
			_handleDialogHideClick( e ) {

				// Close the dialog
				e.target.closest('sl-dialog').hide();

			}

			/** @param {MouseEvent} e */
			_handleConfirmAccountDisconnectClick( e ) {

				// Request account disconnect
				PortalUtils.ajax(PATH_TO_WEB_ROOT + 'twext/ajax/disconnectTwitchExtensionUser.php', {
					data: { twitchAuth },
					success: () => {

						connectedDomotownUserSignal.value = false;

					}
				});

				// Close the dialog
				this._handleDialogHideClick( e );

			}

			_slDialogRef( slDialog ) {

				if( slDialog ) {

					this.ready().then(() => slDialog.show());

				}

			}

			render() {

				if( !twitchAuthSignal.value ) return;

				const connectedUser = getConnectedDomotownUser();

				if( connectedUser === undefined ) return;

				if( connectedUser ) {

					return html`
						<form ${this.formController.attach()}>
							<h2 class="flex items-center text-xl font-semibold mb-3">
								<div>Connected to DomoTown</div>
								${svgHtmlLib.checkmark('w-9 h-9 stroke-[5]')}
							</h2>
							<div
								class="flex flex-col items-stretch space-y-3
									md:flex-row md:space-y-0 md:justify-start md:space-x-3 md:items-center"
							>
								<div class="inline-flex items-center bg-gray-200 dark:bg-gray-800 px-2 py-1.5 pr-5 rounded-xl">
									<dt-avatar
										.user=${connectedUser}
										size="2.5rem"
									></dt-avatar>
									<div class="username ml-2.5 text-lg text-gray-900 dark:text-white font-bold">
										@${connectedUser.username}
									</div>
								</div>
								<dt-submit-button label="Disconnect" class="inline-block"></dt-submit-button>
							</div>
							<div class="mt-10">
								<h2 class="text-xl font-semibold mb-3">Extension Preview</h2>
								<dt-twext-panel class="block overflow-hidden border border-zinc-200 dark:border-zinc-800" style="height: 500px; width: 320px;"></dt-twext-panel>
							</div>
						</form>
						${this.confirmDisconnectRequired ? html`
							<sl-dialog ${Lit.ref(this._slDialogRef)}
								label="Are You Sure?"
								class="dialog-overview"
								@sl-after-hide=${() => this.confirmDisconnectRequired = false}
							>
								Disconnect your DomoTown account from this extension?
								<div slot="footer">
									<sl-button class="dt-button dt-button-cancel" @click=${this._handleDialogHideClick}>Cancel</sl-button>
									<sl-button class="dt-button dt-button-primary" @click=${this._handleConfirmAccountDisconnectClick}>Confirm</sl-button>
								</div>
							</sl-dialog>
						`:''}
					`;

				} else {

					return html`
						<form ${this.formController.attach()}>
							<dt-submit-button label="Connect to DomoTown" class="inline-block"></dt-submit-button>
						</form>
					`;

				}

			}

		}
		TwextConfig.registerTag('dt-twext-config');

		/** Lit wrapper for panel Portal */
		class DtPanelPortal extends LightElement {

			static properties = {
				userId: {state: true}
			};

			/** @type {CachedPortalItemData|undefined} */
			initItemData;

			constructor() {

				super();

				/** @type {number|undefined} */
				this.userId;

			}

			connectedCallback() {

				super.connectedCallback();

				// Create portal
				this.createPortal();

			}

			disconnectedCallback() {

				super.disconnectedCallback();

				// Remove portal
				this.portal?.remove();
				this.portal = undefined;

			}

			/** @param {PortalOptions} portalOptions */
			createPortal( portalOptions = {} ) {

				if( !this.portal ) {

					// set default options

						// container = this
						portalOptions.$container = portalOptions.$container ?? this;
						portalOptions.settings = portalOptions.settings ?? {};
						portalOptions.settings.mode = 'user';
						portalOptions.activeFilters = portalOptions.activeFilters ?? {};
						portalOptions.activeFilters.userId = this.userId;

						if( this.initItemData ) {
							
							portalOptions.initItemData = this.initItemData;
							this.initItemData = undefined;

						}

					this.portal = new Portal( portalOptions );

					// Unset .portal when portal is removed
					this.portal.on(this.portal.events.beforePortalRemoved, () => this.portal = undefined);

					// Configure the "empty portal" display message
					this.portal.on(this.portal.events.portalEmpty, portal => {

						const div = document.createElement('div');

						Lit.render(html`
							This user hasn&rsquo;t shared any public posts yet.
						`, div);

						portal.setEmptyPortalContent( div );

					});

				}

				return this.portal;

			}
			
		}
		DtPanelPortal.registerTag('dt-panel-portal');

		/** Twitch Extension Panel view (below stream) */
		class TwextPanel extends SignalWatcher(LightElement) {

			static properties = {
				confirmDisconnectRequired: {state: true}
			};

			constructor() {

				super();

				this.classList.add('max-h-full','overflow-hidden','flex','flex-col');

			}

			render() {

				if( !twitchAuthSignal.value ) return;

				const connectedUser = getConnectedDomotownUser();

				if( connectedUser ) {

					return html`
						<a
							href=${connectedUser?.profileUrl() ?? '#'}
							class="flex items-center p-3 px-2.5
								font-semibold
								shrink-0"
							style="font-family: 'Montserrat', sans-serif"
							target="_blank"
						>
							<dt-avatar .user=${connectedUser} class="mr-1.5" size="2.5rem"></dt-avatar>
							<div>
								<b class="font-bold">@${connectedUser?.username}</b>&rsquo;s Art Feed
							</div>
						</a>
						<dt-panel-portal .userId=${connectedUser.id} class="overflow-y-auto overflow-x-hidden grow"></dt-panel-portal>
					`;

				}

			}

		}
		TwextPanel.registerTag('dt-twext-panel');

		//
		// Twitch Extension Stuff
		//
		
		/** @type {{channelId: string, clientId: string, helixToken: string, token: string, userId: string}|undefined} */
		let twitchAuth,
		/** @type {CallableFunction} */
		authorizedResolver,
		/** @type {Promise<UserBaseClass>|undefined} */
		connectedDomotownUserPromise;
		
		const Twext = Twitch.ext,
		twitchAuthorized = new Promise(resolve => {

			authorizedResolver = resolve;

		}),
		twitchAuthSignal = preactSignals.signal( undefined ),
		twitchConfigSignal = preactSignals.signal( Twext.configuration ),
		connectedDomotownUserSignal = preactSignals.signal( undefined );
		
		/**
		 * Provides context information about the Twitch stream and player.
		 * @typedef {Object} TwitchContext
		 * @property {boolean|undefined} arePlayerControlsVisible - If `true`, player controls are visible (e.g., due to mouseover). Do not use this for mobile extensions; it is not sent for mobile.
		 * @property {number|undefined} bitrate - Bitrate of the broadcast.
		 * @property {number|undefined} bufferSize - Buffer size of the broadcast.
		 * @property {string|undefined} displayResolution - Display size of the player.
		 * @property {string|undefined} game - Game being broadcast.
		 * @property {number|undefined} hlsLatencyBroadcaster - Number of seconds of latency between the broadcaster and viewer.
		 * @property {{hostedChannelId: number, hostingChannelId: number}|undefined} hostingInfo - Information about the current channel’s hosting status. Undefined if the channel is not currently hosting. Contains `hostedChannelId` (Numeric ID of the channel being hosted) and `hostingChannelId` (Numeric ID of the host channel).
		 * @property {boolean|undefined} isFullScreen - If `true`, the viewer is watching in fullscreen mode. Do not use this for mobile extensions; it is not sent for mobile.
		 * @property {boolean|undefined} isMuted - If `true`, the viewer has muted the stream.
		 * @property {boolean|undefined} isPaused - If `true`, the viewer has paused the stream.
		 * @property {boolean|undefined} isTheatreMode - If `true`, the viewer is watching in theater mode. Do not use this for mobile extensions; it is not sent for mobile.
		 * @property {string|undefined} language - Language of the broadcast (e.g., "en").
		 * @property {'viewer'|'dashboard'|'config'|undefined} mode - Context in which the helper was loaded.
		 * @property {'video'|'audio'|'remote'|'chat-only'|undefined} playbackMode - Indicates how the stream is being played.
		 * @property {'light'|'dark'} theme - The user’s theme setting on the Twitch website.
		 * @property {string} videoResolution - Resolution of the broadcast.
		 * @property {number} volume - Currently selected player volume. Valid values: between 0 and 1.
		 */
		
		// Handle twitch context changes
		Twext.onContext(
			/**
			 * @param {TwitchContext} context
			 * @param {(keyof TwitchContext)[]} delta
			 * */
			(context, delta) => {
		
				// Handle dark-mode changes
				if( delta.includes('theme') ) {

					const isDarkTheme = context.theme === 'dark';
			
					document.body.classList.toggle('dark', isDarkTheme);
					document.body.classList.toggle('sl-theme-dark', isDarkTheme);
			
				}
			
			}
		);

		Twext.onAuthorized((auth) => {

			// update twitchAuth
			twitchAuthSignal.value = twitchAuth = auth;

			// resolve authorized promise
			authorizedResolver();

		});

		Twext.configuration.onChanged(() => {

			// Update reactive twitchConfigSignal
			const {broadcaster, developer, global} = Twext.configuration;
			twitchConfigSignal.value = {broadcaster, developer, global};

		});

		/** @returns {UserBaseClass|false|undefined} */
		function getConnectedDomotownUser() {

			if( !connectedDomotownUserPromise ) {

				connectedDomotownUserPromise = new Promise(async(resolve, reject) => {

					await twitchAuthorized;

					// Get connected user info
					PortalUtils.ajax(PATH_TO_WEB_ROOT + 'twext/ajax/getTwitchBroadcasterDtUser.php', {
						data: { twitchAuth },
						success: (response) => {

							const rawUser = response.data.user;

							if( rawUser ) {

								const liveUser = UserBaseClass.createFromObject( rawUser );

								resolve( liveUser );

							} else {

								reject();

							}

						},
						anyError: (response) => {

							reject();

						}
					});
		
				});

				connectedDomotownUserPromise.then((user) => {

					connectedDomotownUserSignal.value = user;

				}).catch(() => {

					connectedDomotownUserSignal.value = false;

				});

			}

			return connectedDomotownUserSignal.value;

		}
			
		//
		// Command handling
		//
		let queuedCommands = portl.cmd || [];

		queuedCommands.push(function() {

			PortalUtils.init();

		});

		// Assign portl variable
		Object.setPrototypeOf(portl, PortalUtils);

		// Share Lit
		portl.Lit = Lit;

		/** @param {CallableFunction} cmd */
		const execCmd = function( cmd ) {
			
			if (typeof cmd.called === 'undefined') {
				try {
					cmd.call();
					cmd.called = true;
				} catch (e) {
					console.log('portl: Error processing command: ', e);
				}
			}
			
		}
		
		// Execute commands already queued
		for( const command of queuedCommands ) {
			
			execCmd( command );
			
		}
		
		// New commands execute immediately
		portl.cmd = {
			push: execCmd
		};

	})();

}
