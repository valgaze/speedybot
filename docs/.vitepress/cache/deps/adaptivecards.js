import {
  __commonJS
} from "./chunk-6PJEDKO5.js";

// node_modules/adaptivecards/lib/strings.js
var require_strings = __commonJS({
  "node_modules/adaptivecards/lib/strings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Strings = void 0;
    var Strings = (
      /** @class */
      function() {
        function Strings2() {
        }
        Strings2.errors = {
          unknownElementType: function(typeName) {
            return 'Unknown element type "'.concat(typeName, '". Fallback will be used if present.');
          },
          unknownActionType: function(typeName) {
            return 'Unknown action type "'.concat(typeName, '". Fallback will be used if present.');
          },
          elementTypeNotAllowed: function(typeName) {
            return 'Element type "'.concat(typeName, '" is not allowed in this context.');
          },
          actionTypeNotAllowed: function(typeName) {
            return 'Action type "'.concat(typeName, '" is not allowed in this context.');
          },
          invalidPropertyValue: function(value, propertyName) {
            return 'Invalid value "'.concat(value, '" for property "').concat(propertyName, '".');
          },
          showCardMustHaveCard: function() {
            return '"An Action.ShowCard must have its "card" property set to a valid AdaptiveCard object.';
          },
          invalidColumnWidth: function(invalidWidth) {
            return 'Invalid column width "'.concat(invalidWidth, '" - defaulting to "auto".');
          },
          invalidCardVersion: function(defaultingToVersion) {
            return 'Invalid card version. Defaulting to "'.concat(defaultingToVersion, '".');
          },
          invalidVersionString: function(versionString) {
            return 'Invalid version string "'.concat(versionString, '".');
          },
          propertyValueNotSupported: function(value, propertyName, supportedInVersion, versionUsed) {
            return 'Value "'.concat(value, '" for property "').concat(propertyName, '" is supported in version ').concat(supportedInVersion, ", but you are using version ").concat(versionUsed, ".");
          },
          propertyNotSupported: function(propertyName, supportedInVersion, versionUsed) {
            return 'Property "'.concat(propertyName, '" is supported in version ').concat(supportedInVersion, ", but you are using version ").concat(versionUsed, ".");
          },
          indexOutOfRange: function(index) {
            return "Index out of range (".concat(index, ").");
          },
          elementCannotBeUsedAsInline: function() {
            return "RichTextBlock.addInline: the specified card element cannot be used as a RichTextBlock inline.";
          },
          inlineAlreadyParented: function() {
            return "RichTextBlock.addInline: the specified inline already belongs to another RichTextBlock.";
          },
          interactivityNotAllowed: function() {
            return "Interactivity is not allowed.";
          },
          inputsMustHaveUniqueId: function() {
            return "All inputs must have a unique Id.";
          },
          choiceSetMustHaveAtLeastOneChoice: function() {
            return "An Input.ChoiceSet must have at least one choice defined.";
          },
          choiceSetChoicesMustHaveTitleAndValue: function() {
            return "All choices in an Input.ChoiceSet must have their title and value properties set.";
          },
          propertyMustBeSet: function(propertyName) {
            return 'Property "'.concat(propertyName, '" must be set.');
          },
          actionHttpHeadersMustHaveNameAndValue: function() {
            return "All headers of an Action.Http must have their name and value properties set.";
          },
          tooManyActions: function(maximumActions) {
            return "Maximum number of actions exceeded (".concat(maximumActions, ").");
          },
          tooLittleTimeDelay: function(minAutoplayDelay) {
            return "Autoplay Delay is too short (".concat(minAutoplayDelay, ").");
          },
          columnAlreadyBelongsToAnotherSet: function() {
            return "This column already belongs to another ColumnSet.";
          },
          invalidCardType: function() {
            return `Invalid or missing card type. Make sure the card's type property is set to "AdaptiveCard".`;
          },
          unsupportedCardVersion: function(version, maxSupportedVersion) {
            return "The specified card version (".concat(version, ") is not supported or still in preview. The latest released card version is ").concat(maxSupportedVersion, ".");
          },
          duplicateId: function(id) {
            return 'Duplicate Id "'.concat(id, '".');
          },
          markdownProcessingNotEnabled: function() {
            return "Markdown processing isn't enabled. Please see https://www.npmjs.com/package/adaptivecards#supporting-markdown";
          },
          processMarkdownEventRemoved: function() {
            return "The processMarkdown event has been removed. Please update your code and set onProcessMarkdown instead.";
          },
          elementAlreadyParented: function() {
            return "The element already belongs to another container.";
          },
          actionAlreadyParented: function() {
            return "The action already belongs to another element.";
          },
          elementTypeNotStandalone: function(typeName) {
            return "Elements of type ".concat(typeName, " cannot be used as standalone elements.");
          }
        };
        Strings2.magicCodeInputCard = {
          tryAgain: function() {
            return "That didn't work... let's try again.";
          },
          pleaseLogin: function() {
            return 'Please login in the popup. You will obtain a magic code. Paste that code below and select "Submit"';
          },
          enterMagicCode: function() {
            return "Enter magic code";
          },
          pleaseEnterMagicCodeYouReceived: function() {
            return "Please enter the magic code you received.";
          },
          submit: function() {
            return "Submit";
          },
          cancel: function() {
            return "Cancel";
          },
          somethingWentWrong: function() {
            return "Something went wrong. This action can't be handled.";
          },
          authenticationFailed: function() {
            return "Authentication failed.";
          }
        };
        Strings2.runtime = {
          automaticRefreshPaused: function() {
            return "Automatic refresh paused.";
          },
          clckToRestartAutomaticRefresh: function() {
            return "Click to restart.";
          },
          refreshThisCard: function() {
            return "Refresh this card";
          }
        };
        Strings2.hints = {
          dontUseWeightedAndStrecthedColumnsInSameSet: function() {
            return "It is not recommended to use weighted and stretched columns in the same ColumnSet, because in such a situation stretched columns will always get the minimum amount of space.";
          }
        };
        Strings2.defaults = {
          inlineActionTitle: function() {
            return "Inline Action";
          },
          overflowButtonText: function() {
            return "...";
          },
          mediaPlayerAriaLabel: function() {
            return "Media content";
          },
          mediaPlayerPlayMedia: function() {
            return "Play media";
          },
          youTubeVideoPlayer: function() {
            return "YouTube video player";
          },
          vimeoVideoPlayer: function() {
            return "Vimeo video player";
          },
          dailymotionVideoPlayer: function() {
            return "Dailymotion video player";
          }
        };
        return Strings2;
      }()
    );
    exports.Strings = Strings;
  }
});

// node_modules/adaptivecards/lib/enums.js
var require_enums = __commonJS({
  "node_modules/adaptivecards/lib/enums.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LogLevel = exports.RefreshMode = exports.TypeErrorType = exports.ContainerFitStatus = exports.ValidationEvent = exports.ValidationPhase = exports.InputTextStyle = exports.ActionIconPlacement = exports.FillMode = exports.Orientation = exports.ShowCardActionMode = exports.ImageStyle = exports.ActionAlignment = exports.VerticalAlignment = exports.HorizontalAlignment = exports.TextColor = exports.Spacing = exports.FontType = exports.TextWeight = exports.TextSize = exports.SizeUnit = exports.ImageSize = exports.Size = exports.ActionMode = exports.ActionStyle = exports.ContainerStyle = void 0;
    var ContainerStyle = (
      /** @class */
      function() {
        function ContainerStyle2() {
        }
        ContainerStyle2.Default = "default";
        ContainerStyle2.Emphasis = "emphasis";
        ContainerStyle2.Accent = "accent";
        ContainerStyle2.Good = "good";
        ContainerStyle2.Attention = "attention";
        ContainerStyle2.Warning = "warning";
        return ContainerStyle2;
      }()
    );
    exports.ContainerStyle = ContainerStyle;
    var ActionStyle = (
      /** @class */
      function() {
        function ActionStyle2() {
        }
        ActionStyle2.Default = "default";
        ActionStyle2.Positive = "positive";
        ActionStyle2.Destructive = "destructive";
        return ActionStyle2;
      }()
    );
    exports.ActionStyle = ActionStyle;
    var ActionMode = (
      /** @class */
      function() {
        function ActionMode2() {
        }
        ActionMode2.Primary = "primary";
        ActionMode2.Secondary = "secondary";
        return ActionMode2;
      }()
    );
    exports.ActionMode = ActionMode;
    var Size;
    (function(Size2) {
      Size2[Size2["Auto"] = 0] = "Auto";
      Size2[Size2["Stretch"] = 1] = "Stretch";
      Size2[Size2["Small"] = 2] = "Small";
      Size2[Size2["Medium"] = 3] = "Medium";
      Size2[Size2["Large"] = 4] = "Large";
    })(Size = exports.Size || (exports.Size = {}));
    var ImageSize;
    (function(ImageSize2) {
      ImageSize2[ImageSize2["Small"] = 0] = "Small";
      ImageSize2[ImageSize2["Medium"] = 1] = "Medium";
      ImageSize2[ImageSize2["Large"] = 2] = "Large";
    })(ImageSize = exports.ImageSize || (exports.ImageSize = {}));
    var SizeUnit;
    (function(SizeUnit2) {
      SizeUnit2[SizeUnit2["Weight"] = 0] = "Weight";
      SizeUnit2[SizeUnit2["Pixel"] = 1] = "Pixel";
    })(SizeUnit = exports.SizeUnit || (exports.SizeUnit = {}));
    var TextSize;
    (function(TextSize2) {
      TextSize2[TextSize2["Small"] = 0] = "Small";
      TextSize2[TextSize2["Default"] = 1] = "Default";
      TextSize2[TextSize2["Medium"] = 2] = "Medium";
      TextSize2[TextSize2["Large"] = 3] = "Large";
      TextSize2[TextSize2["ExtraLarge"] = 4] = "ExtraLarge";
    })(TextSize = exports.TextSize || (exports.TextSize = {}));
    var TextWeight;
    (function(TextWeight2) {
      TextWeight2[TextWeight2["Lighter"] = 0] = "Lighter";
      TextWeight2[TextWeight2["Default"] = 1] = "Default";
      TextWeight2[TextWeight2["Bolder"] = 2] = "Bolder";
    })(TextWeight = exports.TextWeight || (exports.TextWeight = {}));
    var FontType;
    (function(FontType2) {
      FontType2[FontType2["Default"] = 0] = "Default";
      FontType2[FontType2["Monospace"] = 1] = "Monospace";
    })(FontType = exports.FontType || (exports.FontType = {}));
    var Spacing;
    (function(Spacing2) {
      Spacing2[Spacing2["None"] = 0] = "None";
      Spacing2[Spacing2["Small"] = 1] = "Small";
      Spacing2[Spacing2["Default"] = 2] = "Default";
      Spacing2[Spacing2["Medium"] = 3] = "Medium";
      Spacing2[Spacing2["Large"] = 4] = "Large";
      Spacing2[Spacing2["ExtraLarge"] = 5] = "ExtraLarge";
      Spacing2[Spacing2["Padding"] = 6] = "Padding";
    })(Spacing = exports.Spacing || (exports.Spacing = {}));
    var TextColor;
    (function(TextColor2) {
      TextColor2[TextColor2["Default"] = 0] = "Default";
      TextColor2[TextColor2["Dark"] = 1] = "Dark";
      TextColor2[TextColor2["Light"] = 2] = "Light";
      TextColor2[TextColor2["Accent"] = 3] = "Accent";
      TextColor2[TextColor2["Good"] = 4] = "Good";
      TextColor2[TextColor2["Warning"] = 5] = "Warning";
      TextColor2[TextColor2["Attention"] = 6] = "Attention";
    })(TextColor = exports.TextColor || (exports.TextColor = {}));
    var HorizontalAlignment;
    (function(HorizontalAlignment2) {
      HorizontalAlignment2[HorizontalAlignment2["Left"] = 0] = "Left";
      HorizontalAlignment2[HorizontalAlignment2["Center"] = 1] = "Center";
      HorizontalAlignment2[HorizontalAlignment2["Right"] = 2] = "Right";
    })(HorizontalAlignment = exports.HorizontalAlignment || (exports.HorizontalAlignment = {}));
    var VerticalAlignment;
    (function(VerticalAlignment2) {
      VerticalAlignment2[VerticalAlignment2["Top"] = 0] = "Top";
      VerticalAlignment2[VerticalAlignment2["Center"] = 1] = "Center";
      VerticalAlignment2[VerticalAlignment2["Bottom"] = 2] = "Bottom";
    })(VerticalAlignment = exports.VerticalAlignment || (exports.VerticalAlignment = {}));
    var ActionAlignment;
    (function(ActionAlignment2) {
      ActionAlignment2[ActionAlignment2["Left"] = 0] = "Left";
      ActionAlignment2[ActionAlignment2["Center"] = 1] = "Center";
      ActionAlignment2[ActionAlignment2["Right"] = 2] = "Right";
      ActionAlignment2[ActionAlignment2["Stretch"] = 3] = "Stretch";
    })(ActionAlignment = exports.ActionAlignment || (exports.ActionAlignment = {}));
    var ImageStyle;
    (function(ImageStyle2) {
      ImageStyle2[ImageStyle2["Default"] = 0] = "Default";
      ImageStyle2[ImageStyle2["Person"] = 1] = "Person";
    })(ImageStyle = exports.ImageStyle || (exports.ImageStyle = {}));
    var ShowCardActionMode;
    (function(ShowCardActionMode2) {
      ShowCardActionMode2[ShowCardActionMode2["Inline"] = 0] = "Inline";
      ShowCardActionMode2[ShowCardActionMode2["Popup"] = 1] = "Popup";
    })(ShowCardActionMode = exports.ShowCardActionMode || (exports.ShowCardActionMode = {}));
    var Orientation;
    (function(Orientation2) {
      Orientation2[Orientation2["Horizontal"] = 0] = "Horizontal";
      Orientation2[Orientation2["Vertical"] = 1] = "Vertical";
    })(Orientation = exports.Orientation || (exports.Orientation = {}));
    var FillMode;
    (function(FillMode2) {
      FillMode2[FillMode2["Cover"] = 0] = "Cover";
      FillMode2[FillMode2["RepeatHorizontally"] = 1] = "RepeatHorizontally";
      FillMode2[FillMode2["RepeatVertically"] = 2] = "RepeatVertically";
      FillMode2[FillMode2["Repeat"] = 3] = "Repeat";
    })(FillMode = exports.FillMode || (exports.FillMode = {}));
    var ActionIconPlacement;
    (function(ActionIconPlacement2) {
      ActionIconPlacement2[ActionIconPlacement2["LeftOfTitle"] = 0] = "LeftOfTitle";
      ActionIconPlacement2[ActionIconPlacement2["AboveTitle"] = 1] = "AboveTitle";
    })(ActionIconPlacement = exports.ActionIconPlacement || (exports.ActionIconPlacement = {}));
    var InputTextStyle;
    (function(InputTextStyle2) {
      InputTextStyle2[InputTextStyle2["Text"] = 0] = "Text";
      InputTextStyle2[InputTextStyle2["Tel"] = 1] = "Tel";
      InputTextStyle2[InputTextStyle2["Url"] = 2] = "Url";
      InputTextStyle2[InputTextStyle2["Email"] = 3] = "Email";
      InputTextStyle2[InputTextStyle2["Password"] = 4] = "Password";
    })(InputTextStyle = exports.InputTextStyle || (exports.InputTextStyle = {}));
    var ValidationPhase;
    (function(ValidationPhase2) {
      ValidationPhase2[ValidationPhase2["Parse"] = 0] = "Parse";
      ValidationPhase2[ValidationPhase2["ToJSON"] = 1] = "ToJSON";
      ValidationPhase2[ValidationPhase2["Validation"] = 2] = "Validation";
    })(ValidationPhase = exports.ValidationPhase || (exports.ValidationPhase = {}));
    var ValidationEvent;
    (function(ValidationEvent2) {
      ValidationEvent2[ValidationEvent2["Hint"] = 0] = "Hint";
      ValidationEvent2[ValidationEvent2["ActionTypeNotAllowed"] = 1] = "ActionTypeNotAllowed";
      ValidationEvent2[ValidationEvent2["CollectionCantBeEmpty"] = 2] = "CollectionCantBeEmpty";
      ValidationEvent2[ValidationEvent2["Deprecated"] = 3] = "Deprecated";
      ValidationEvent2[ValidationEvent2["ElementTypeNotAllowed"] = 4] = "ElementTypeNotAllowed";
      ValidationEvent2[ValidationEvent2["InteractivityNotAllowed"] = 5] = "InteractivityNotAllowed";
      ValidationEvent2[ValidationEvent2["InvalidPropertyValue"] = 6] = "InvalidPropertyValue";
      ValidationEvent2[ValidationEvent2["MissingCardType"] = 7] = "MissingCardType";
      ValidationEvent2[ValidationEvent2["PropertyCantBeNull"] = 8] = "PropertyCantBeNull";
      ValidationEvent2[ValidationEvent2["TooManyActions"] = 9] = "TooManyActions";
      ValidationEvent2[ValidationEvent2["UnknownActionType"] = 10] = "UnknownActionType";
      ValidationEvent2[ValidationEvent2["UnknownElementType"] = 11] = "UnknownElementType";
      ValidationEvent2[ValidationEvent2["UnsupportedCardVersion"] = 12] = "UnsupportedCardVersion";
      ValidationEvent2[ValidationEvent2["DuplicateId"] = 13] = "DuplicateId";
      ValidationEvent2[ValidationEvent2["UnsupportedProperty"] = 14] = "UnsupportedProperty";
      ValidationEvent2[ValidationEvent2["RequiredInputsShouldHaveLabel"] = 15] = "RequiredInputsShouldHaveLabel";
      ValidationEvent2[ValidationEvent2["RequiredInputsShouldHaveErrorMessage"] = 16] = "RequiredInputsShouldHaveErrorMessage";
      ValidationEvent2[ValidationEvent2["Other"] = 17] = "Other";
    })(ValidationEvent = exports.ValidationEvent || (exports.ValidationEvent = {}));
    var ContainerFitStatus;
    (function(ContainerFitStatus2) {
      ContainerFitStatus2[ContainerFitStatus2["FullyInContainer"] = 0] = "FullyInContainer";
      ContainerFitStatus2[ContainerFitStatus2["Overflowing"] = 1] = "Overflowing";
      ContainerFitStatus2[ContainerFitStatus2["FullyOutOfContainer"] = 2] = "FullyOutOfContainer";
    })(ContainerFitStatus = exports.ContainerFitStatus || (exports.ContainerFitStatus = {}));
    var TypeErrorType;
    (function(TypeErrorType2) {
      TypeErrorType2[TypeErrorType2["UnknownType"] = 0] = "UnknownType";
      TypeErrorType2[TypeErrorType2["ForbiddenType"] = 1] = "ForbiddenType";
    })(TypeErrorType = exports.TypeErrorType || (exports.TypeErrorType = {}));
    var RefreshMode;
    (function(RefreshMode2) {
      RefreshMode2[RefreshMode2["Disabled"] = 0] = "Disabled";
      RefreshMode2[RefreshMode2["Manual"] = 1] = "Manual";
      RefreshMode2[RefreshMode2["Automatic"] = 2] = "Automatic";
    })(RefreshMode = exports.RefreshMode || (exports.RefreshMode = {}));
    var LogLevel;
    (function(LogLevel2) {
      LogLevel2[LogLevel2["Info"] = 0] = "Info";
      LogLevel2[LogLevel2["Warning"] = 1] = "Warning";
      LogLevel2[LogLevel2["Error"] = 2] = "Error";
    })(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
  }
});

// node_modules/adaptivecards/lib/shared.js
var require_shared = __commonJS({
  "node_modules/adaptivecards/lib/shared.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UUID = exports.SizeAndUnit = exports.PaddingDefinition = exports.SpacingDefinition = exports.StringWithSubstitutions = exports.ContentTypes = exports.GlobalSettings = void 0;
    var Enums = require_enums();
    var GlobalSettings = (
      /** @class */
      function() {
        function GlobalSettings2() {
        }
        GlobalSettings2.useAdvancedTextBlockTruncation = true;
        GlobalSettings2.useAdvancedCardBottomTruncation = false;
        GlobalSettings2.useMarkdownInRadioButtonAndCheckbox = true;
        GlobalSettings2.allowMarkForTextHighlighting = false;
        GlobalSettings2.alwaysBleedSeparators = false;
        GlobalSettings2.enableFullJsonRoundTrip = false;
        GlobalSettings2.displayInputValidationErrors = true;
        GlobalSettings2.allowPreProcessingPropertyValues = false;
        GlobalSettings2.setTabIndexAtCardRoot = true;
        GlobalSettings2.enableFallback = true;
        GlobalSettings2.useWebkitLineClamp = true;
        GlobalSettings2.allowMoreThanMaxActionsInOverflowMenu = false;
        GlobalSettings2.removePaddingFromContainersWithBackgroundImage = false;
        GlobalSettings2.resetInputsDirtyStateAfterActionExecution = true;
        GlobalSettings2.applets = {
          logEnabled: true,
          logLevel: Enums.LogLevel.Error,
          maximumRetryAttempts: 3,
          defaultTimeBetweenRetryAttempts: 3e3,
          authPromptWidth: 400,
          authPromptHeight: 600,
          refresh: {
            mode: Enums.RefreshMode.Manual,
            timeBetweenAutomaticRefreshes: 3e3,
            maximumConsecutiveAutomaticRefreshes: 3,
            allowManualRefreshesAfterAutomaticRefreshes: true
          }
        };
        return GlobalSettings2;
      }()
    );
    exports.GlobalSettings = GlobalSettings;
    exports.ContentTypes = {
      applicationJson: "application/json",
      applicationXWwwFormUrlencoded: "application/x-www-form-urlencoded"
    };
    var StringWithSubstitutions = (
      /** @class */
      function() {
        function StringWithSubstitutions2() {
          this._isProcessed = false;
        }
        StringWithSubstitutions2.prototype.getReferencedInputs = function(inputs, referencedInputs) {
          if (!referencedInputs) {
            throw new Error("The referencedInputs parameter cannot be null.");
          }
          if (this._original) {
            for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
              var input = inputs_1[_i];
              var matches = new RegExp("\\{{2}(" + input.id + ").value\\}{2}", "gi").exec(this._original);
              if (matches != null && input.id) {
                referencedInputs[input.id] = input;
              }
            }
          }
        };
        StringWithSubstitutions2.prototype.substituteInputValues = function(inputs, contentType) {
          this._processed = this._original;
          if (this._original) {
            var regEx = /\{{2}([a-z0-9_$@]+).value\}{2}/gi;
            var matches = void 0;
            while ((matches = regEx.exec(this._original)) !== null && this._processed) {
              for (var _i = 0, _a = Object.keys(inputs); _i < _a.length; _i++) {
                var key = _a[_i];
                if (key.toLowerCase() === matches[1].toLowerCase()) {
                  var matchedInput = inputs[key];
                  var valueForReplace = "";
                  if (matchedInput.value) {
                    valueForReplace = matchedInput.value;
                  }
                  if (contentType === exports.ContentTypes.applicationJson) {
                    valueForReplace = JSON.stringify(valueForReplace);
                    valueForReplace = valueForReplace.slice(1, -1);
                  } else if (contentType === exports.ContentTypes.applicationXWwwFormUrlencoded) {
                    valueForReplace = encodeURIComponent(valueForReplace);
                  }
                  this._processed = this._processed.replace(matches[0], valueForReplace);
                  break;
                }
              }
            }
          }
          this._isProcessed = true;
        };
        StringWithSubstitutions2.prototype.getOriginal = function() {
          return this._original;
        };
        StringWithSubstitutions2.prototype.get = function() {
          if (!this._isProcessed) {
            return this._original;
          } else {
            return this._processed;
          }
        };
        StringWithSubstitutions2.prototype.set = function(value) {
          this._original = value;
          this._isProcessed = false;
        };
        return StringWithSubstitutions2;
      }()
    );
    exports.StringWithSubstitutions = StringWithSubstitutions;
    var SpacingDefinition = (
      /** @class */
      /* @__PURE__ */ function() {
        function SpacingDefinition2(top, right, bottom, left) {
          if (top === void 0) {
            top = 0;
          }
          if (right === void 0) {
            right = 0;
          }
          if (bottom === void 0) {
            bottom = 0;
          }
          if (left === void 0) {
            left = 0;
          }
          this.left = 0;
          this.top = 0;
          this.right = 0;
          this.bottom = 0;
          this.top = top;
          this.right = right;
          this.bottom = bottom;
          this.left = left;
        }
        return SpacingDefinition2;
      }()
    );
    exports.SpacingDefinition = SpacingDefinition;
    var PaddingDefinition = (
      /** @class */
      /* @__PURE__ */ function() {
        function PaddingDefinition2(top, right, bottom, left) {
          if (top === void 0) {
            top = Enums.Spacing.None;
          }
          if (right === void 0) {
            right = Enums.Spacing.None;
          }
          if (bottom === void 0) {
            bottom = Enums.Spacing.None;
          }
          if (left === void 0) {
            left = Enums.Spacing.None;
          }
          this.top = Enums.Spacing.None;
          this.right = Enums.Spacing.None;
          this.bottom = Enums.Spacing.None;
          this.left = Enums.Spacing.None;
          this.top = top;
          this.right = right;
          this.bottom = bottom;
          this.left = left;
        }
        return PaddingDefinition2;
      }()
    );
    exports.PaddingDefinition = PaddingDefinition;
    var SizeAndUnit = (
      /** @class */
      function() {
        function SizeAndUnit2(physicalSize, unit) {
          this.physicalSize = physicalSize;
          this.unit = unit;
        }
        SizeAndUnit2.parse = function(input, requireUnitSpecifier) {
          if (requireUnitSpecifier === void 0) {
            requireUnitSpecifier = false;
          }
          var result = new SizeAndUnit2(0, Enums.SizeUnit.Weight);
          if (typeof input === "number") {
            result.physicalSize = input;
            return result;
          } else if (typeof input === "string") {
            var regExp = /^([0-9]+)(px|\*)?$/g;
            var matches = regExp.exec(input);
            var expectedMatchCount = requireUnitSpecifier ? 3 : 2;
            if (matches && matches.length >= expectedMatchCount) {
              result.physicalSize = parseInt(matches[1]);
              if (matches.length === 3) {
                if (matches[2] === "px") {
                  result.unit = Enums.SizeUnit.Pixel;
                }
              }
              return result;
            }
          }
          throw new Error("Invalid size: " + input);
        };
        return SizeAndUnit2;
      }()
    );
    exports.SizeAndUnit = SizeAndUnit;
    var UUID = (
      /** @class */
      function() {
        function UUID2() {
        }
        UUID2.generate = function() {
          var d0 = Math.random() * 4294967295 | 0;
          var d1 = Math.random() * 4294967295 | 0;
          var d2 = Math.random() * 4294967295 | 0;
          var d3 = Math.random() * 4294967295 | 0;
          return UUID2.lut[d0 & 255] + UUID2.lut[d0 >> 8 & 255] + UUID2.lut[d0 >> 16 & 255] + UUID2.lut[d0 >> 24 & 255] + "-" + UUID2.lut[d1 & 255] + UUID2.lut[d1 >> 8 & 255] + "-" + UUID2.lut[d1 >> 16 & 15 | 64] + UUID2.lut[d1 >> 24 & 255] + "-" + UUID2.lut[d2 & 63 | 128] + UUID2.lut[d2 >> 8 & 255] + "-" + UUID2.lut[d2 >> 16 & 255] + UUID2.lut[d2 >> 24 & 255] + UUID2.lut[d3 & 255] + UUID2.lut[d3 >> 8 & 255] + UUID2.lut[d3 >> 16 & 255] + UUID2.lut[d3 >> 24 & 255];
        };
        UUID2.initialize = function() {
          for (var i = 0; i < 256; i++) {
            UUID2.lut[i] = (i < 16 ? "0" : "") + i.toString(16);
          }
        };
        UUID2.lut = [];
        return UUID2;
      }()
    );
    exports.UUID = UUID;
    UUID.initialize();
  }
});

// node_modules/adaptivecards/lib/utils.js
var require_utils = __commonJS({
  "node_modules/adaptivecards/lib/utils.js"(exports) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.clearElementChildren = exports.getScrollY = exports.getScrollX = exports.getFitStatus = exports.truncate = exports.truncateText = exports.stringToCssColor = exports.parseEnum = exports.getEnumValueByName = exports.parseBool = exports.parseNumber = exports.parseString = exports.appendChild = exports.generateUniqueId = exports.isMobileOS = exports.isInternetExplorer = void 0;
    var Enums = require_enums();
    var Shared = require_shared();
    function isInternetExplorer() {
      return window.document.documentMode !== void 0;
    }
    exports.isInternetExplorer = isInternetExplorer;
    function isMobileOS() {
      var userAgent = window.navigator.userAgent;
      return !!userAgent.match(/Android/i) || !!userAgent.match(/iPad/i) || !!userAgent.match(/iPhone/i);
    }
    exports.isMobileOS = isMobileOS;
    function generateUniqueId() {
      return "__ac-" + Shared.UUID.generate();
    }
    exports.generateUniqueId = generateUniqueId;
    function appendChild(node, child) {
      if (child) {
        node.appendChild(child);
      }
    }
    exports.appendChild = appendChild;
    function parseString(obj, defaultValue) {
      return typeof obj === "string" ? obj : defaultValue;
    }
    exports.parseString = parseString;
    function parseNumber(obj, defaultValue) {
      return typeof obj === "number" ? obj : defaultValue;
    }
    exports.parseNumber = parseNumber;
    function parseBool(value, defaultValue) {
      if (typeof value === "boolean") {
        return value;
      } else if (typeof value === "string") {
        switch (value.toLowerCase()) {
          case "true":
            return true;
          case "false":
            return false;
          default:
            return defaultValue;
        }
      }
      return defaultValue;
    }
    exports.parseBool = parseBool;
    function getEnumValueByName(enumType, name) {
      for (var key in enumType) {
        var keyAsNumber = parseInt(key, 10);
        if (keyAsNumber >= 0) {
          var value = enumType[key];
          if (value && typeof value === "string" && value.toLowerCase() === name.toLowerCase()) {
            return keyAsNumber;
          }
        }
      }
      return void 0;
    }
    exports.getEnumValueByName = getEnumValueByName;
    function parseEnum(enumType, name, defaultValue) {
      if (!name) {
        return defaultValue;
      }
      var enumValue = getEnumValueByName(enumType, name);
      return enumValue !== void 0 ? enumValue : defaultValue;
    }
    exports.parseEnum = parseEnum;
    function stringToCssColor(color) {
      if (color) {
        var regEx = /#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})?/gi;
        var matches = regEx.exec(color);
        if (matches && matches[4]) {
          var a = parseInt(matches[1], 16) / 255;
          var r = parseInt(matches[2], 16);
          var g = parseInt(matches[3], 16);
          var b = parseInt(matches[4], 16);
          return "rgba(" + r + "," + g + "," + b + "," + a + ")";
        }
      }
      return color;
    }
    exports.stringToCssColor = stringToCssColor;
    function truncateWorker(element, maxHeight, fullText, truncateAt, lineHeight) {
      var fits = function() {
        return maxHeight - element.scrollHeight >= -1;
      };
      if (fits()) {
        return;
      }
      var breakableIndices = findBreakableIndices(fullText);
      var lo = 0;
      var hi = breakableIndices.length;
      var bestBreakIdx = 0;
      while (lo < hi) {
        var mid = Math.floor((lo + hi) / 2);
        truncateAt(fullText, breakableIndices[mid]);
        if (fits()) {
          bestBreakIdx = breakableIndices[mid];
          lo = mid + 1;
        } else {
          hi = mid;
        }
      }
      truncateAt(fullText, bestBreakIdx);
      if (lineHeight && maxHeight - element.scrollHeight >= lineHeight - 1) {
        var idx = findNextCharacter(fullText, bestBreakIdx);
        while (idx < fullText.length) {
          truncateAt(fullText, idx);
          if (fits()) {
            bestBreakIdx = idx;
            idx = findNextCharacter(fullText, idx);
          } else {
            break;
          }
        }
        truncateAt(fullText, bestBreakIdx);
      }
    }
    function truncateText(element, maxHeight, lineHeight) {
      truncateWorker(element, maxHeight, element.innerText, function(text, idx) {
        element.innerText = text.substring(0, idx) + "...";
      }, lineHeight);
    }
    exports.truncateText = truncateText;
    var ttDeprecatedPolicy = typeof window === "undefined" ? void 0 : (_a = window.trustedTypes) === null || _a === void 0 ? void 0 : _a.createPolicy("adaptivecards#deprecatedExportedFunctionPolicy", {
      createHTML: function(value) {
        return value;
      }
    });
    function truncate(element, maxHeight, lineHeight) {
      truncateWorker(element, maxHeight, element.innerHTML, function(text, idx) {
        var _a2;
        var truncatedString = text.substring(0, idx) + "...";
        var truncatedHTML = (_a2 = ttDeprecatedPolicy === null || ttDeprecatedPolicy === void 0 ? void 0 : ttDeprecatedPolicy.createHTML(truncatedString)) !== null && _a2 !== void 0 ? _a2 : truncatedString;
        element.innerHTML = truncatedHTML;
      }, lineHeight);
    }
    exports.truncate = truncate;
    function findBreakableIndices(html) {
      var results = [];
      var idx = findNextCharacter(html, -1);
      while (idx < html.length) {
        if (html[idx] === " ") {
          results.push(idx);
        }
        idx = findNextCharacter(html, idx);
      }
      return results;
    }
    function findNextCharacter(html, currIdx) {
      currIdx += 1;
      while (currIdx < html.length && html[currIdx] === "<") {
        while (currIdx < html.length && html[currIdx++] !== ">") {
          continue;
        }
      }
      return currIdx;
    }
    function getFitStatus(element, containerEnd) {
      var start = element.offsetTop;
      var end = start + element.clientHeight;
      if (end <= containerEnd) {
        return Enums.ContainerFitStatus.FullyInContainer;
      } else if (start < containerEnd) {
        return Enums.ContainerFitStatus.Overflowing;
      } else {
        return Enums.ContainerFitStatus.FullyOutOfContainer;
      }
    }
    exports.getFitStatus = getFitStatus;
    function getScrollX() {
      return window.pageXOffset;
    }
    exports.getScrollX = getScrollX;
    function getScrollY() {
      return window.pageYOffset;
    }
    exports.getScrollY = getScrollY;
    function clearElementChildren(element) {
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
    }
    exports.clearElementChildren = clearElementChildren;
  }
});

// node_modules/adaptivecards/lib/serialization.js
var require_serialization = __commonJS({
  "node_modules/adaptivecards/lib/serialization.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SerializableObject = exports.property = exports.SerializableObjectSchema = exports.CustomProperty = exports.SerializableObjectCollectionProperty = exports.SerializableObjectProperty = exports.EnumProperty = exports.ValueSetProperty = exports.StringArrayProperty = exports.PixelSizeProperty = exports.NumProperty = exports.BoolProperty = exports.StringProperty = exports.PropertyDefinition = exports.BaseSerializationContext = exports.isVersionLessOrEqual = exports.Versions = exports.Version = void 0;
    var shared_1 = require_shared();
    var Utils = require_utils();
    var Enums = require_enums();
    var strings_1 = require_strings();
    var Version = (
      /** @class */
      function() {
        function Version2(major, minor, label) {
          if (major === void 0) {
            major = 1;
          }
          if (minor === void 0) {
            minor = 1;
          }
          this._isValid = true;
          this._major = major;
          this._minor = minor;
          this._label = label;
        }
        Version2.parse = function(versionString, context) {
          if (!versionString) {
            return void 0;
          }
          var result = new Version2();
          result._versionString = versionString;
          var regEx = /(\d+).(\d+)/gi;
          var matches = regEx.exec(versionString);
          if (matches != null && matches.length === 3) {
            result._major = parseInt(matches[1]);
            result._minor = parseInt(matches[2]);
          } else {
            result._isValid = false;
          }
          if (!result._isValid) {
            context.logParseEvent(void 0, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.invalidVersionString(result._versionString));
          }
          return result;
        };
        Version2.prototype.toString = function() {
          return !this._isValid ? this._versionString : this._major + "." + this._minor;
        };
        Version2.prototype.toJSON = function() {
          return this.toString();
        };
        Version2.prototype.compareTo = function(otherVersion) {
          if (!this.isValid || !otherVersion.isValid) {
            throw new Error("Cannot compare invalid version.");
          }
          if (this.major > otherVersion.major) {
            return 1;
          } else if (this.major < otherVersion.major) {
            return -1;
          } else if (this.minor > otherVersion.minor) {
            return 1;
          } else if (this.minor < otherVersion.minor) {
            return -1;
          }
          return 0;
        };
        Object.defineProperty(Version2.prototype, "label", {
          get: function() {
            return this._label ? this._label : this.toString();
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Version2.prototype, "major", {
          get: function() {
            return this._major;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Version2.prototype, "minor", {
          get: function() {
            return this._minor;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Version2.prototype, "isValid", {
          get: function() {
            return this._isValid;
          },
          enumerable: false,
          configurable: true
        });
        return Version2;
      }()
    );
    exports.Version = Version;
    var Versions = (
      /** @class */
      function() {
        function Versions2() {
        }
        Versions2.getAllDeclaredVersions = function() {
          var ctor = Versions2;
          var properties = [];
          for (var propertyName in ctor) {
            if (propertyName.match(/^v[0-9_]*$/)) {
              try {
                var propertyValue = ctor[propertyName];
                if (propertyValue instanceof Version) {
                  properties.push(propertyValue);
                }
              } catch (_a) {
              }
            }
          }
          return properties.sort(function(v1, v2) {
            return v1.compareTo(v2);
          });
        };
        Versions2.v1_0 = new Version(1, 0);
        Versions2.v1_1 = new Version(1, 1);
        Versions2.v1_2 = new Version(1, 2);
        Versions2.v1_3 = new Version(1, 3);
        Versions2.v1_4 = new Version(1, 4);
        Versions2.v1_5 = new Version(1, 5);
        Versions2.v1_6 = new Version(1, 6, "1.6 Preview");
        Versions2.latest = Versions2.v1_5;
        return Versions2;
      }()
    );
    exports.Versions = Versions;
    function isVersionLessOrEqual(version, targetVersion) {
      if (version instanceof Version) {
        if (targetVersion instanceof Version) {
          return targetVersion.compareTo(version) >= 0;
        } else {
          return true;
        }
      } else {
        return true;
      }
    }
    exports.isVersionLessOrEqual = isVersionLessOrEqual;
    var BaseSerializationContext = (
      /** @class */
      function() {
        function BaseSerializationContext2(targetVersion) {
          if (targetVersion === void 0) {
            targetVersion = Versions.latest;
          }
          this._validationEvents = [];
          this.targetVersion = targetVersion;
        }
        BaseSerializationContext2.prototype.serializeValue = function(target, propertyName, propertyValue, defaultValue, forceDeleteIfNullOrDefault) {
          if (defaultValue === void 0) {
            defaultValue = void 0;
          }
          if (forceDeleteIfNullOrDefault === void 0) {
            forceDeleteIfNullOrDefault = false;
          }
          if (propertyValue === null || propertyValue === void 0 || propertyValue === defaultValue) {
            if (!shared_1.GlobalSettings.enableFullJsonRoundTrip || forceDeleteIfNullOrDefault) {
              delete target[propertyName];
            }
          } else if (propertyValue === defaultValue) {
            delete target[propertyName];
          } else {
            target[propertyName] = propertyValue;
          }
        };
        BaseSerializationContext2.prototype.serializeString = function(target, propertyName, propertyValue, defaultValue) {
          if (propertyValue === null || propertyValue === void 0 || propertyValue === defaultValue) {
            if (!shared_1.GlobalSettings.enableFullJsonRoundTrip) {
              delete target[propertyName];
            }
          } else {
            target[propertyName] = propertyValue;
          }
        };
        BaseSerializationContext2.prototype.serializeBool = function(target, propertyName, propertyValue, defaultValue) {
          if (propertyValue === null || propertyValue === void 0 || propertyValue === defaultValue) {
            if (!shared_1.GlobalSettings.enableFullJsonRoundTrip) {
              delete target[propertyName];
            }
          } else {
            target[propertyName] = propertyValue;
          }
        };
        BaseSerializationContext2.prototype.serializeNumber = function(target, propertyName, propertyValue, defaultValue) {
          if (propertyValue === null || propertyValue === void 0 || propertyValue === defaultValue || isNaN(propertyValue)) {
            if (!shared_1.GlobalSettings.enableFullJsonRoundTrip) {
              delete target[propertyName];
            }
          } else {
            target[propertyName] = propertyValue;
          }
        };
        BaseSerializationContext2.prototype.serializeEnum = function(enumType, target, propertyName, propertyValue, defaultValue) {
          if (defaultValue === void 0) {
            defaultValue = void 0;
          }
          if (propertyValue === null || propertyValue === void 0 || propertyValue === defaultValue) {
            if (!shared_1.GlobalSettings.enableFullJsonRoundTrip) {
              delete target[propertyName];
            }
          } else {
            target[propertyName] = enumType[propertyValue];
          }
        };
        BaseSerializationContext2.prototype.serializeArray = function(target, propertyName, propertyValue) {
          var items = [];
          if (propertyValue) {
            for (var _i = 0, propertyValue_1 = propertyValue; _i < propertyValue_1.length; _i++) {
              var item = propertyValue_1[_i];
              var serializedItem = void 0;
              if (item instanceof SerializableObject) {
                serializedItem = item.toJSON(this);
              } else if (item.toJSON) {
                serializedItem = item.toJSON();
              } else {
                serializedItem = item;
              }
              if (serializedItem !== void 0) {
                items.push(serializedItem);
              }
            }
          }
          if (items.length === 0) {
            if (target.hasOwnProperty(propertyName) && Array.isArray(target[propertyName])) {
              delete target[propertyName];
            }
          } else {
            this.serializeValue(target, propertyName, items);
          }
        };
        BaseSerializationContext2.prototype.clearEvents = function() {
          this._validationEvents = [];
        };
        BaseSerializationContext2.prototype.logEvent = function(source, phase, event, message) {
          this._validationEvents.push({
            source,
            phase,
            event,
            message
          });
        };
        BaseSerializationContext2.prototype.logParseEvent = function(source, event, message) {
          this.logEvent(source, Enums.ValidationPhase.Parse, event, message);
        };
        BaseSerializationContext2.prototype.getEventAt = function(index) {
          return this._validationEvents[index];
        };
        Object.defineProperty(BaseSerializationContext2.prototype, "eventCount", {
          get: function() {
            return this._validationEvents.length;
          },
          enumerable: false,
          configurable: true
        });
        return BaseSerializationContext2;
      }()
    );
    exports.BaseSerializationContext = BaseSerializationContext;
    var SimpleSerializationContext = (
      /** @class */
      function(_super) {
        __extends(SimpleSerializationContext2, _super);
        function SimpleSerializationContext2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        return SimpleSerializationContext2;
      }(BaseSerializationContext)
    );
    var PropertyDefinition = (
      /** @class */
      function() {
        function PropertyDefinition2(targetVersion, name, defaultValue, onGetInitialValue) {
          this.targetVersion = targetVersion;
          this.name = name;
          this.defaultValue = defaultValue;
          this.onGetInitialValue = onGetInitialValue;
          this.isSerializationEnabled = true;
          this.sequentialNumber = PropertyDefinition2._sequentialNumber;
          PropertyDefinition2._sequentialNumber++;
        }
        PropertyDefinition2.prototype.getInternalName = function() {
          return this.name;
        };
        PropertyDefinition2.prototype.parse = function(sender, source, context) {
          return source[this.name];
        };
        PropertyDefinition2.prototype.toJSON = function(sender, target, value, context) {
          context.serializeValue(target, this.name, value, this.defaultValue);
        };
        PropertyDefinition2._sequentialNumber = 0;
        return PropertyDefinition2;
      }()
    );
    exports.PropertyDefinition = PropertyDefinition;
    var StringProperty = (
      /** @class */
      function(_super) {
        __extends(StringProperty2, _super);
        function StringProperty2(targetVersion, name, treatEmptyAsUndefined, regEx, defaultValue, onGetInitialValue) {
          if (treatEmptyAsUndefined === void 0) {
            treatEmptyAsUndefined = true;
          }
          var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
          _this.targetVersion = targetVersion;
          _this.name = name;
          _this.treatEmptyAsUndefined = treatEmptyAsUndefined;
          _this.regEx = regEx;
          _this.defaultValue = defaultValue;
          _this.onGetInitialValue = onGetInitialValue;
          return _this;
        }
        StringProperty2.prototype.parse = function(sender, source, context) {
          var parsedValue = Utils.parseString(source[this.name], this.defaultValue);
          var isUndefined = parsedValue === void 0 || parsedValue === "" && this.treatEmptyAsUndefined;
          if (!isUndefined && this.regEx !== void 0) {
            var matches = this.regEx.exec(parsedValue);
            if (!matches) {
              context.logParseEvent(sender, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.invalidPropertyValue(parsedValue, this.name));
              return void 0;
            }
          }
          return parsedValue;
        };
        StringProperty2.prototype.toJSON = function(sender, target, value, context) {
          context.serializeString(target, this.name, value === "" && this.treatEmptyAsUndefined ? void 0 : value, this.defaultValue);
        };
        return StringProperty2;
      }(PropertyDefinition)
    );
    exports.StringProperty = StringProperty;
    var BoolProperty = (
      /** @class */
      function(_super) {
        __extends(BoolProperty2, _super);
        function BoolProperty2(targetVersion, name, defaultValue, onGetInitialValue) {
          var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
          _this.targetVersion = targetVersion;
          _this.name = name;
          _this.defaultValue = defaultValue;
          _this.onGetInitialValue = onGetInitialValue;
          return _this;
        }
        BoolProperty2.prototype.parse = function(sender, source, context) {
          return Utils.parseBool(source[this.name], this.defaultValue);
        };
        BoolProperty2.prototype.toJSON = function(sender, target, value, context) {
          context.serializeBool(target, this.name, value, this.defaultValue);
        };
        return BoolProperty2;
      }(PropertyDefinition)
    );
    exports.BoolProperty = BoolProperty;
    var NumProperty = (
      /** @class */
      function(_super) {
        __extends(NumProperty2, _super);
        function NumProperty2(targetVersion, name, defaultValue, onGetInitialValue) {
          var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
          _this.targetVersion = targetVersion;
          _this.name = name;
          _this.defaultValue = defaultValue;
          _this.onGetInitialValue = onGetInitialValue;
          return _this;
        }
        NumProperty2.prototype.parse = function(sender, source, context) {
          return Utils.parseNumber(source[this.name], this.defaultValue);
        };
        NumProperty2.prototype.toJSON = function(sender, target, value, context) {
          context.serializeNumber(target, this.name, value, this.defaultValue);
        };
        return NumProperty2;
      }(PropertyDefinition)
    );
    exports.NumProperty = NumProperty;
    var PixelSizeProperty = (
      /** @class */
      function(_super) {
        __extends(PixelSizeProperty2, _super);
        function PixelSizeProperty2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        PixelSizeProperty2.prototype.parse = function(sender, source, context) {
          var result = void 0;
          var value = source[this.name];
          if (typeof value === "string") {
            var isValid = false;
            try {
              var size = shared_1.SizeAndUnit.parse(value, true);
              if (size.unit === Enums.SizeUnit.Pixel) {
                result = size.physicalSize;
                isValid = true;
              }
            } catch (_a) {
            }
            if (!isValid) {
              context.logParseEvent(sender, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.invalidPropertyValue(source[this.name], "minHeight"));
            }
          }
          return result;
        };
        PixelSizeProperty2.prototype.toJSON = function(sender, target, value, context) {
          context.serializeValue(target, this.name, typeof value === "number" && !isNaN(value) ? value + "px" : void 0);
        };
        return PixelSizeProperty2;
      }(PropertyDefinition)
    );
    exports.PixelSizeProperty = PixelSizeProperty;
    var StringArrayProperty = (
      /** @class */
      function(_super) {
        __extends(StringArrayProperty2, _super);
        function StringArrayProperty2(targetVersion, name, defaultValue, onGetInitialValue) {
          var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
          _this.targetVersion = targetVersion;
          _this.name = name;
          _this.defaultValue = defaultValue;
          _this.onGetInitialValue = onGetInitialValue;
          return _this;
        }
        StringArrayProperty2.prototype.parse = function(sender, source, context) {
          var sourceValue = source[this.name];
          if (sourceValue === void 0 || !Array.isArray(sourceValue)) {
            return this.defaultValue;
          }
          var result = [];
          for (var _i = 0, sourceValue_1 = sourceValue; _i < sourceValue_1.length; _i++) {
            var value = sourceValue_1[_i];
            if (typeof value === "string") {
              result.push(value);
            } else {
              context.logParseEvent(sender, Enums.ValidationEvent.InvalidPropertyValue, 'Invalid array value "'.concat(JSON.stringify(value), '" of type "').concat(typeof value, '" ignored for "').concat(this.name, '".'));
            }
          }
          return result;
        };
        StringArrayProperty2.prototype.toJSON = function(sender, target, value, context) {
          context.serializeArray(target, this.name, value);
        };
        return StringArrayProperty2;
      }(PropertyDefinition)
    );
    exports.StringArrayProperty = StringArrayProperty;
    var ValueSetProperty = (
      /** @class */
      function(_super) {
        __extends(ValueSetProperty2, _super);
        function ValueSetProperty2(targetVersion, name, values, defaultValue, onGetInitialValue) {
          var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
          _this.targetVersion = targetVersion;
          _this.name = name;
          _this.values = values;
          _this.defaultValue = defaultValue;
          _this.onGetInitialValue = onGetInitialValue;
          return _this;
        }
        ValueSetProperty2.prototype.isValidValue = function(value, context) {
          for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
            var versionedValue = _a[_i];
            if (value.toLowerCase() === versionedValue.value.toLowerCase()) {
              var targetVersion = versionedValue.targetVersion ? versionedValue.targetVersion : this.targetVersion;
              return targetVersion.compareTo(context.targetVersion) <= 0;
            }
          }
          return false;
        };
        ValueSetProperty2.prototype.parse = function(sender, source, context) {
          var sourceValue = source[this.name];
          if (sourceValue === void 0) {
            return this.defaultValue;
          }
          if (typeof sourceValue === "string") {
            for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
              var versionedValue = _a[_i];
              if (sourceValue.toLowerCase() === versionedValue.value.toLowerCase()) {
                var targetVersion = versionedValue.targetVersion ? versionedValue.targetVersion : this.targetVersion;
                if (targetVersion.compareTo(context.targetVersion) <= 0) {
                  return versionedValue.value;
                } else {
                  context.logParseEvent(sender, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.propertyValueNotSupported(sourceValue, this.name, targetVersion.toString(), context.targetVersion.toString()));
                  return this.defaultValue;
                }
              }
            }
          }
          context.logParseEvent(sender, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.invalidPropertyValue(sourceValue, this.name));
          return this.defaultValue;
        };
        ValueSetProperty2.prototype.toJSON = function(sender, target, value, context) {
          var invalidValue = false;
          if (value !== void 0) {
            invalidValue = true;
            for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
              var versionedValue = _a[_i];
              if (versionedValue.value === value) {
                var targetVersion = versionedValue.targetVersion ? versionedValue.targetVersion : this.targetVersion;
                if (targetVersion.compareTo(context.targetVersion) <= 0) {
                  invalidValue = false;
                  break;
                } else {
                  context.logEvent(sender, Enums.ValidationPhase.ToJSON, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.propertyValueNotSupported(value, this.name, targetVersion.toString(), context.targetVersion.toString()));
                }
              }
            }
          }
          if (!invalidValue) {
            context.serializeValue(target, this.name, value, this.defaultValue, true);
          }
        };
        return ValueSetProperty2;
      }(PropertyDefinition)
    );
    exports.ValueSetProperty = ValueSetProperty;
    var EnumProperty = (
      /** @class */
      function(_super) {
        __extends(EnumProperty2, _super);
        function EnumProperty2(targetVersion, name, enumType, defaultValue, values, onGetInitialValue) {
          var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
          _this.targetVersion = targetVersion;
          _this.name = name;
          _this.enumType = enumType;
          _this.defaultValue = defaultValue;
          _this.onGetInitialValue = onGetInitialValue;
          _this._values = [];
          if (!values) {
            for (var key in enumType) {
              var keyAsNumber = parseInt(key, 10);
              if (keyAsNumber >= 0) {
                _this._values.push({ value: keyAsNumber });
              }
            }
          } else {
            _this._values = values;
          }
          return _this;
        }
        EnumProperty2.prototype.parse = function(sender, source, context) {
          var sourceValue = source[this.name];
          if (typeof sourceValue !== "string") {
            return this.defaultValue;
          }
          var enumValue = Utils.getEnumValueByName(this.enumType, sourceValue);
          if (enumValue !== void 0) {
            for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
              var versionedValue = _a[_i];
              if (versionedValue.value === enumValue) {
                var targetVersion = versionedValue.targetVersion ? versionedValue.targetVersion : this.targetVersion;
                if (targetVersion.compareTo(context.targetVersion) <= 0) {
                  return enumValue;
                } else {
                  context.logParseEvent(sender, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.propertyValueNotSupported(sourceValue, this.name, targetVersion.toString(), context.targetVersion.toString()));
                  return this.defaultValue;
                }
              }
            }
          }
          context.logParseEvent(sender, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.invalidPropertyValue(sourceValue, this.name));
          return this.defaultValue;
        };
        EnumProperty2.prototype.toJSON = function(sender, target, value, context) {
          var invalidValue = false;
          if (value !== void 0) {
            invalidValue = true;
            for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
              var versionedValue = _a[_i];
              if (versionedValue.value === value) {
                var targetVersion = versionedValue.targetVersion ? versionedValue.targetVersion : this.targetVersion;
                if (targetVersion.compareTo(context.targetVersion) <= 0) {
                  invalidValue = false;
                  break;
                } else {
                  context.logEvent(sender, Enums.ValidationPhase.ToJSON, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.invalidPropertyValue(value, this.name));
                }
              }
            }
          }
          if (!invalidValue) {
            context.serializeEnum(this.enumType, target, this.name, value, this.defaultValue);
          }
        };
        Object.defineProperty(EnumProperty2.prototype, "values", {
          get: function() {
            return this._values;
          },
          enumerable: false,
          configurable: true
        });
        return EnumProperty2;
      }(PropertyDefinition)
    );
    exports.EnumProperty = EnumProperty;
    var SerializableObjectProperty = (
      /** @class */
      function(_super) {
        __extends(SerializableObjectProperty2, _super);
        function SerializableObjectProperty2(targetVersion, name, objectType, nullable, defaultValue) {
          if (nullable === void 0) {
            nullable = false;
          }
          var _this = _super.call(this, targetVersion, name, defaultValue, function(sender) {
            return _this.nullable ? void 0 : new _this.objectType();
          }) || this;
          _this.targetVersion = targetVersion;
          _this.name = name;
          _this.objectType = objectType;
          _this.nullable = nullable;
          return _this;
        }
        SerializableObjectProperty2.prototype.parse = function(sender, source, context) {
          var sourceValue = source[this.name];
          if (sourceValue === void 0) {
            return this.onGetInitialValue ? this.onGetInitialValue(sender) : this.defaultValue;
          }
          var result = new this.objectType();
          result.parse(sourceValue, context);
          return result;
        };
        SerializableObjectProperty2.prototype.toJSON = function(sender, target, value, context) {
          var serializedValue = void 0;
          if (value !== void 0 && !value.hasAllDefaultValues()) {
            serializedValue = value.toJSON(context);
          }
          if (typeof serializedValue === "object" && Object.keys(serializedValue).length === 0) {
            serializedValue = void 0;
          }
          context.serializeValue(target, this.name, serializedValue, this.defaultValue, true);
        };
        return SerializableObjectProperty2;
      }(PropertyDefinition)
    );
    exports.SerializableObjectProperty = SerializableObjectProperty;
    var SerializableObjectCollectionProperty = (
      /** @class */
      function(_super) {
        __extends(SerializableObjectCollectionProperty2, _super);
        function SerializableObjectCollectionProperty2(targetVersion, name, objectType, onItemAdded) {
          var _this = _super.call(this, targetVersion, name, void 0, function(sender) {
            return [];
          }) || this;
          _this.targetVersion = targetVersion;
          _this.name = name;
          _this.objectType = objectType;
          _this.onItemAdded = onItemAdded;
          return _this;
        }
        SerializableObjectCollectionProperty2.prototype.parse = function(sender, source, context) {
          var result = [];
          var sourceCollection = source[this.name];
          if (Array.isArray(sourceCollection)) {
            for (var _i = 0, sourceCollection_1 = sourceCollection; _i < sourceCollection_1.length; _i++) {
              var sourceItem = sourceCollection_1[_i];
              var item = new this.objectType();
              item.parse(sourceItem, context);
              result.push(item);
              if (this.onItemAdded) {
                this.onItemAdded(sender, item);
              }
            }
          }
          return result.length > 0 ? result : this.onGetInitialValue ? this.onGetInitialValue(sender) : void 0;
        };
        SerializableObjectCollectionProperty2.prototype.toJSON = function(sender, target, value, context) {
          context.serializeArray(target, this.name, value);
        };
        return SerializableObjectCollectionProperty2;
      }(PropertyDefinition)
    );
    exports.SerializableObjectCollectionProperty = SerializableObjectCollectionProperty;
    var CustomProperty = (
      /** @class */
      function(_super) {
        __extends(CustomProperty2, _super);
        function CustomProperty2(targetVersion, name, onParse, onToJSON, defaultValue, onGetInitialValue) {
          var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
          _this.targetVersion = targetVersion;
          _this.name = name;
          _this.onParse = onParse;
          _this.onToJSON = onToJSON;
          _this.defaultValue = defaultValue;
          _this.onGetInitialValue = onGetInitialValue;
          if (!_this.onParse) {
            throw new Error("CustomPropertyDefinition instances must have an onParse handler.");
          }
          if (!_this.onToJSON) {
            throw new Error("CustomPropertyDefinition instances must have an onToJSON handler.");
          }
          return _this;
        }
        CustomProperty2.prototype.parse = function(sender, source, context) {
          return this.onParse(sender, this, source, context);
        };
        CustomProperty2.prototype.toJSON = function(sender, target, value, context) {
          this.onToJSON(sender, this, target, value, context);
        };
        return CustomProperty2;
      }(PropertyDefinition)
    );
    exports.CustomProperty = CustomProperty;
    var SerializableObjectSchema = (
      /** @class */
      function() {
        function SerializableObjectSchema2() {
          this._properties = [];
        }
        SerializableObjectSchema2.prototype.indexOf = function(prop) {
          for (var i = 0; i < this._properties.length; i++) {
            if (this._properties[i] === prop) {
              return i;
            }
          }
          return -1;
        };
        SerializableObjectSchema2.prototype.add = function() {
          var properties = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            properties[_i] = arguments[_i];
          }
          for (var _a = 0, properties_1 = properties; _a < properties_1.length; _a++) {
            var prop = properties_1[_a];
            if (this.indexOf(prop) === -1) {
              this._properties.push(prop);
            }
          }
        };
        SerializableObjectSchema2.prototype.remove = function() {
          var properties = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            properties[_i] = arguments[_i];
          }
          for (var _a = 0, properties_2 = properties; _a < properties_2.length; _a++) {
            var prop = properties_2[_a];
            while (true) {
              var index = this.indexOf(prop);
              if (index >= 0) {
                this._properties.splice(index, 1);
              } else {
                break;
              }
            }
          }
        };
        SerializableObjectSchema2.prototype.getItemAt = function(index) {
          return this._properties[index];
        };
        SerializableObjectSchema2.prototype.getCount = function() {
          return this._properties.length;
        };
        return SerializableObjectSchema2;
      }()
    );
    exports.SerializableObjectSchema = SerializableObjectSchema;
    function property(prop) {
      return function(target, propertyKey) {
        var descriptor = Object.getOwnPropertyDescriptor(target, propertyKey) || {};
        if (!descriptor.get && !descriptor.set) {
          descriptor.get = function() {
            return this.getValue(prop);
          };
          descriptor.set = function(value) {
            this.setValue(prop, value);
          };
          Object.defineProperty(target, propertyKey, descriptor);
        }
      };
    }
    exports.property = property;
    var SerializableObject = (
      /** @class */
      function() {
        function SerializableObject2() {
          this._propertyBag = {};
          this._rawProperties = {};
          this.maxVersion = SerializableObject2.defaultMaxVersion;
          var s = this.getSchema();
          for (var i = 0; i < s.getCount(); i++) {
            var prop = s.getItemAt(i);
            if (prop.onGetInitialValue) {
              this.setValue(prop, prop.onGetInitialValue(this));
            }
          }
        }
        SerializableObject2.prototype.getDefaultSerializationContext = function() {
          return new SimpleSerializationContext();
        };
        SerializableObject2.prototype.populateSchema = function(schema) {
          var ctor = this.constructor;
          var properties = [];
          for (var propertyName in ctor) {
            try {
              var propertyValue = ctor[propertyName];
              if (propertyValue instanceof PropertyDefinition) {
                properties.push(propertyValue);
              }
            } catch (_a) {
            }
          }
          if (properties.length > 0) {
            var sortedProperties = properties.sort(function(p1, p2) {
              if (p1.sequentialNumber > p2.sequentialNumber) {
                return 1;
              } else if (p1.sequentialNumber < p2.sequentialNumber) {
                return -1;
              }
              return 0;
            });
            schema.add.apply(schema, sortedProperties);
          }
          if (SerializableObject2.onRegisterCustomProperties) {
            SerializableObject2.onRegisterCustomProperties(this, schema);
          }
        };
        SerializableObject2.prototype.getValue = function(prop) {
          return this._propertyBag.hasOwnProperty(prop.getInternalName()) ? this._propertyBag[prop.getInternalName()] : prop.defaultValue;
        };
        SerializableObject2.prototype.setValue = function(prop, value) {
          if (value === void 0 || value === null) {
            delete this._propertyBag[prop.getInternalName()];
          } else {
            this._propertyBag[prop.getInternalName()] = value;
          }
        };
        SerializableObject2.prototype.internalParse = function(source, context) {
          this._propertyBag = {};
          this._rawProperties = shared_1.GlobalSettings.enableFullJsonRoundTrip ? source ? source : {} : {};
          if (source) {
            var s = this.getSchema();
            for (var i = 0; i < s.getCount(); i++) {
              var prop = s.getItemAt(i);
              if (prop.isSerializationEnabled) {
                var propertyValue = prop.onGetInitialValue ? prop.onGetInitialValue(this) : void 0;
                if (source.hasOwnProperty(prop.name)) {
                  if (prop.targetVersion.compareTo(context.targetVersion) <= 0) {
                    propertyValue = prop.parse(this, source, context);
                  } else {
                    context.logParseEvent(this, Enums.ValidationEvent.UnsupportedProperty, strings_1.Strings.errors.propertyNotSupported(prop.name, prop.targetVersion.toString(), context.targetVersion.toString()));
                  }
                }
                this.setValue(prop, propertyValue);
              }
            }
          } else {
            this.resetDefaultValues();
          }
        };
        SerializableObject2.prototype.internalToJSON = function(target, context) {
          var s = this.getSchema();
          var serializedProperties = [];
          for (var i = 0; i < s.getCount(); i++) {
            var prop = s.getItemAt(i);
            if (prop.isSerializationEnabled && prop.targetVersion.compareTo(context.targetVersion) <= 0 && serializedProperties.indexOf(prop.name) === -1) {
              prop.toJSON(this, target, this.getValue(prop), context);
              serializedProperties.push(prop.name);
            }
          }
        };
        SerializableObject2.prototype.shouldSerialize = function(_context) {
          return true;
        };
        SerializableObject2.prototype.parse = function(source, context) {
          this.internalParse(source, context ? context : new SimpleSerializationContext());
        };
        SerializableObject2.prototype.toJSON = function(context) {
          var effectiveContext;
          if (context && context instanceof BaseSerializationContext) {
            effectiveContext = context;
          } else {
            effectiveContext = this.getDefaultSerializationContext();
            effectiveContext.toJSONOriginalParam = context;
          }
          if (this.shouldSerialize(effectiveContext)) {
            var result = void 0;
            if (shared_1.GlobalSettings.enableFullJsonRoundTrip && this._rawProperties && typeof this._rawProperties === "object") {
              result = this._rawProperties;
            } else {
              result = {};
            }
            this.internalToJSON(result, effectiveContext);
            return result;
          } else {
            return void 0;
          }
        };
        SerializableObject2.prototype.hasDefaultValue = function(prop) {
          return this.getValue(prop) === prop.defaultValue;
        };
        SerializableObject2.prototype.hasAllDefaultValues = function() {
          var s = this.getSchema();
          for (var i = 0; i < s.getCount(); i++) {
            var prop = s.getItemAt(i);
            if (!this.hasDefaultValue(prop)) {
              return false;
            }
          }
          return true;
        };
        SerializableObject2.prototype.resetDefaultValues = function() {
          var s = this.getSchema();
          for (var i = 0; i < s.getCount(); i++) {
            var prop = s.getItemAt(i);
            this.setValue(prop, prop.defaultValue);
          }
        };
        SerializableObject2.prototype.setCustomProperty = function(name, value) {
          var shouldDeleteProperty = typeof value === "string" && !value || value === void 0 || value === null;
          if (shouldDeleteProperty) {
            delete this._rawProperties[name];
          } else {
            this._rawProperties[name] = value;
          }
        };
        SerializableObject2.prototype.getCustomProperty = function(name) {
          return this._rawProperties[name];
        };
        SerializableObject2.prototype.getSchema = function() {
          var schema = SerializableObject2._schemaCache[this.getSchemaKey()];
          if (!schema) {
            schema = new SerializableObjectSchema();
            this.populateSchema(schema);
            SerializableObject2._schemaCache[this.getSchemaKey()] = schema;
          }
          return schema;
        };
        SerializableObject2.defaultMaxVersion = Versions.latest;
        SerializableObject2._schemaCache = {};
        return SerializableObject2;
      }()
    );
    exports.SerializableObject = SerializableObject;
  }
});

// node_modules/adaptivecards/lib/host-capabilities.js
var require_host_capabilities = __commonJS({
  "node_modules/adaptivecards/lib/host-capabilities.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HostCapabilities = void 0;
    var serialization_1 = require_serialization();
    var HostCapabilities = (
      /** @class */
      function(_super) {
        __extends(HostCapabilities2, _super);
        function HostCapabilities2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this._capabilities = {};
          return _this;
        }
        HostCapabilities2.prototype.getSchemaKey = function() {
          return "HostCapabilities";
        };
        HostCapabilities2.prototype.internalParse = function(source, context) {
          _super.prototype.internalParse.call(this, source, context);
          if (source) {
            for (var name_1 in source) {
              var jsonVersion = source[name_1];
              if (typeof jsonVersion === "string") {
                if (jsonVersion === "*") {
                  this.addCapability(name_1, "*");
                } else {
                  var version = serialization_1.Version.parse(jsonVersion, context);
                  if (version === null || version === void 0 ? void 0 : version.isValid) {
                    this.addCapability(name_1, version);
                  }
                }
              }
            }
          }
        };
        HostCapabilities2.prototype.internalToJSON = function(target, context) {
          _super.prototype.internalToJSON.call(this, target, context);
          for (var key in this._capabilities) {
            target[key] = this._capabilities[key];
          }
        };
        HostCapabilities2.prototype.addCapability = function(name, version) {
          this._capabilities[name] = version;
        };
        HostCapabilities2.prototype.removeCapability = function(name) {
          delete this._capabilities[name];
        };
        HostCapabilities2.prototype.clear = function() {
          this._capabilities = {};
        };
        HostCapabilities2.prototype.hasCapability = function(name, version) {
          if (this._capabilities.hasOwnProperty(name)) {
            if (version === "*" || this._capabilities[name] === "*") {
              return true;
            }
            return version.compareTo(this._capabilities[name]) <= 0;
          }
          return false;
        };
        HostCapabilities2.prototype.areAllMet = function(hostCapabilities) {
          for (var capabilityName in this._capabilities) {
            if (!hostCapabilities.hasCapability(capabilityName, this._capabilities[capabilityName])) {
              return false;
            }
          }
          return true;
        };
        return HostCapabilities2;
      }(serialization_1.SerializableObject)
    );
    exports.HostCapabilities = HostCapabilities;
  }
});

// node_modules/adaptivecards/lib/host-config.js
var require_host_config = __commonJS({
  "node_modules/adaptivecards/lib/host-config.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultHostConfig = exports.HostConfig = exports.FontTypeSet = exports.FontTypeDefinition = exports.ContainerStyleSet = exports.ContainerStyleDefinition = exports.ColorSetDefinition = exports.ActionsConfig = exports.ShowCardActionConfig = exports.FactSetConfig = exports.FactTitleDefinition = exports.FactTextDefinition = exports.InputConfig = exports.InputLabelConfig = exports.RequiredInputLabelTextDefinition = exports.TextBlockConfig = exports.TextStyleSet = exports.TextStyleDefinition = exports.BaseTextDefinition = exports.TableConfig = exports.MediaConfig = exports.ImageSetConfig = exports.AdaptiveCardConfig = exports.TextColorDefinition = exports.ColorDefinition = void 0;
    var Enums = require_enums();
    var Utils = require_utils();
    var Shared = require_shared();
    var host_capabilities_1 = require_host_capabilities();
    function parseHostConfigEnum(targetEnum, value, defaultValue) {
      if (typeof value === "string") {
        var parsedValue = Utils.parseEnum(targetEnum, value, defaultValue);
        return parsedValue !== void 0 ? parsedValue : defaultValue;
      } else if (typeof value === "number") {
        return value;
      } else {
        return defaultValue;
      }
    }
    var ColorDefinition = (
      /** @class */
      function() {
        function ColorDefinition2(defaultColor, subtleColor) {
          this.default = "#000000";
          this.subtle = "#666666";
          if (defaultColor) {
            this.default = defaultColor;
          }
          if (subtleColor) {
            this.subtle = subtleColor;
          }
        }
        ColorDefinition2.prototype.parse = function(obj) {
          if (obj) {
            this.default = obj["default"] || this.default;
            this.subtle = obj["subtle"] || this.subtle;
          }
        };
        return ColorDefinition2;
      }()
    );
    exports.ColorDefinition = ColorDefinition;
    var TextColorDefinition = (
      /** @class */
      function(_super) {
        __extends(TextColorDefinition2, _super);
        function TextColorDefinition2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.highlightColors = new ColorDefinition("#22000000", "#11000000");
          return _this;
        }
        TextColorDefinition2.prototype.parse = function(obj) {
          _super.prototype.parse.call(this, obj);
          if (obj) {
            this.highlightColors.parse(obj["highlightColors"]);
          }
        };
        return TextColorDefinition2;
      }(ColorDefinition)
    );
    exports.TextColorDefinition = TextColorDefinition;
    var AdaptiveCardConfig = (
      /** @class */
      /* @__PURE__ */ function() {
        function AdaptiveCardConfig2(obj) {
          this.allowCustomStyle = false;
          if (obj) {
            this.allowCustomStyle = obj["allowCustomStyle"] || this.allowCustomStyle;
          }
        }
        return AdaptiveCardConfig2;
      }()
    );
    exports.AdaptiveCardConfig = AdaptiveCardConfig;
    var ImageSetConfig = (
      /** @class */
      function() {
        function ImageSetConfig2(obj) {
          this.imageSize = Enums.Size.Medium;
          this.maxImageHeight = 100;
          if (obj) {
            this.imageSize = obj["imageSize"] != null ? obj["imageSize"] : this.imageSize;
            this.maxImageHeight = Utils.parseNumber(obj["maxImageHeight"], 100);
          }
        }
        ImageSetConfig2.prototype.toJSON = function() {
          return {
            imageSize: Enums.Size[this.imageSize],
            maxImageHeight: this.maxImageHeight
          };
        };
        return ImageSetConfig2;
      }()
    );
    exports.ImageSetConfig = ImageSetConfig;
    var MediaConfig = (
      /** @class */
      function() {
        function MediaConfig2(obj) {
          this.allowInlinePlayback = true;
          if (obj) {
            this.defaultPoster = obj["defaultPoster"];
            this.allowInlinePlayback = obj["allowInlinePlayback"] || this.allowInlinePlayback;
          }
        }
        MediaConfig2.prototype.toJSON = function() {
          return {
            defaultPoster: this.defaultPoster,
            allowInlinePlayback: this.allowInlinePlayback
          };
        };
        return MediaConfig2;
      }()
    );
    exports.MediaConfig = MediaConfig;
    var TableConfig = (
      /** @class */
      function() {
        function TableConfig2(obj) {
          this.cellSpacing = 8;
          if (obj) {
            this.cellSpacing = obj.cellSpacing && typeof obj.cellSpacing === "number" ? obj.cellSpacing : this.cellSpacing;
          }
        }
        TableConfig2.prototype.toJSON = function() {
          return {
            cellSpacing: this.cellSpacing
          };
        };
        return TableConfig2;
      }()
    );
    exports.TableConfig = TableConfig;
    var BaseTextDefinition = (
      /** @class */
      function() {
        function BaseTextDefinition2(obj) {
          this.size = Enums.TextSize.Default;
          this.color = Enums.TextColor.Default;
          this.isSubtle = false;
          this.weight = Enums.TextWeight.Default;
          this.parse(obj);
        }
        BaseTextDefinition2.prototype.parse = function(obj) {
          if (obj) {
            this.size = parseHostConfigEnum(Enums.TextSize, obj["size"], this.size);
            this.color = parseHostConfigEnum(Enums.TextColor, obj["color"], this.color);
            this.isSubtle = obj.isSubtle !== void 0 && typeof obj.isSubtle === "boolean" ? obj.isSubtle : this.isSubtle;
            this.weight = parseHostConfigEnum(Enums.TextWeight, obj["weight"], this.getDefaultWeight());
          }
        };
        BaseTextDefinition2.prototype.getDefaultWeight = function() {
          return Enums.TextWeight.Default;
        };
        BaseTextDefinition2.prototype.toJSON = function() {
          return {
            size: Enums.TextSize[this.size],
            color: Enums.TextColor[this.color],
            isSubtle: this.isSubtle,
            weight: Enums.TextWeight[this.weight]
          };
        };
        return BaseTextDefinition2;
      }()
    );
    exports.BaseTextDefinition = BaseTextDefinition;
    var TextStyleDefinition = (
      /** @class */
      function(_super) {
        __extends(TextStyleDefinition2, _super);
        function TextStyleDefinition2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.fontType = Enums.FontType.Default;
          return _this;
        }
        TextStyleDefinition2.prototype.parse = function(obj) {
          _super.prototype.parse.call(this, obj);
          if (obj) {
            this.fontType = parseHostConfigEnum(Enums.FontType, obj.fontType, this.fontType);
          }
        };
        return TextStyleDefinition2;
      }(BaseTextDefinition)
    );
    exports.TextStyleDefinition = TextStyleDefinition;
    var TextStyleSet = (
      /** @class */
      function() {
        function TextStyleSet2(obj) {
          this.default = new TextStyleDefinition();
          this.heading = new TextStyleDefinition({
            size: "Large",
            weight: "Bolder"
          });
          this.columnHeader = new TextStyleDefinition({
            weight: "Bolder"
          });
          if (obj) {
            this.heading.parse(obj.heading);
            this.columnHeader.parse(obj.columnHeader);
          }
        }
        TextStyleSet2.prototype.getStyleByName = function(name) {
          switch (name.toLowerCase()) {
            case "heading":
              return this.heading;
            case "columnHeader":
              return this.columnHeader;
            default:
              return this.default;
          }
        };
        return TextStyleSet2;
      }()
    );
    exports.TextStyleSet = TextStyleSet;
    var TextBlockConfig = (
      /** @class */
      /* @__PURE__ */ function() {
        function TextBlockConfig2(obj) {
          if (obj) {
            this.headingLevel = Utils.parseNumber(obj.headingLevel);
          }
        }
        return TextBlockConfig2;
      }()
    );
    exports.TextBlockConfig = TextBlockConfig;
    var RequiredInputLabelTextDefinition = (
      /** @class */
      function(_super) {
        __extends(RequiredInputLabelTextDefinition2, _super);
        function RequiredInputLabelTextDefinition2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.suffix = " *";
          _this.suffixColor = Enums.TextColor.Attention;
          return _this;
        }
        RequiredInputLabelTextDefinition2.prototype.parse = function(obj) {
          _super.prototype.parse.call(this, obj);
          if (obj) {
            this.suffix = obj["suffix"] || this.suffix;
            this.suffixColor = parseHostConfigEnum(Enums.TextColor, obj["suffixColor"], this.suffixColor);
          }
        };
        RequiredInputLabelTextDefinition2.prototype.toJSON = function() {
          var result = _super.prototype.toJSON.call(this);
          result["suffix"] = this.suffix;
          result["suffixColor"] = Enums.TextColor[this.suffixColor];
          return result;
        };
        return RequiredInputLabelTextDefinition2;
      }(BaseTextDefinition)
    );
    exports.RequiredInputLabelTextDefinition = RequiredInputLabelTextDefinition;
    var InputLabelConfig = (
      /** @class */
      /* @__PURE__ */ function() {
        function InputLabelConfig2(obj) {
          this.inputSpacing = Enums.Spacing.Small;
          this.requiredInputs = new RequiredInputLabelTextDefinition();
          this.optionalInputs = new BaseTextDefinition();
          if (obj) {
            this.inputSpacing = parseHostConfigEnum(Enums.Spacing, obj["inputSpacing"], this.inputSpacing);
            this.requiredInputs = new RequiredInputLabelTextDefinition(obj["requiredInputs"]);
            this.optionalInputs = new BaseTextDefinition(obj["optionalInputs"]);
          }
        }
        return InputLabelConfig2;
      }()
    );
    exports.InputLabelConfig = InputLabelConfig;
    var InputConfig = (
      /** @class */
      /* @__PURE__ */ function() {
        function InputConfig2(obj) {
          this.label = new InputLabelConfig();
          this.errorMessage = new BaseTextDefinition({
            color: Enums.TextColor.Attention
          });
          if (obj) {
            this.label = new InputLabelConfig(obj["label"]);
            this.errorMessage = new BaseTextDefinition(obj["errorMessage"]);
          }
        }
        return InputConfig2;
      }()
    );
    exports.InputConfig = InputConfig;
    var FactTextDefinition = (
      /** @class */
      function(_super) {
        __extends(FactTextDefinition2, _super);
        function FactTextDefinition2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.wrap = true;
          return _this;
        }
        FactTextDefinition2.prototype.parse = function(obj) {
          _super.prototype.parse.call(this, obj);
          if (obj) {
            this.wrap = obj["wrap"] != null ? obj["wrap"] : this.wrap;
          }
        };
        FactTextDefinition2.prototype.toJSON = function() {
          var result = _super.prototype.toJSON.call(this);
          result["wrap"] = this.wrap;
          return result;
        };
        return FactTextDefinition2;
      }(BaseTextDefinition)
    );
    exports.FactTextDefinition = FactTextDefinition;
    var FactTitleDefinition = (
      /** @class */
      function(_super) {
        __extends(FactTitleDefinition2, _super);
        function FactTitleDefinition2(obj) {
          var _this = _super.call(this, obj) || this;
          _this.maxWidth = 150;
          _this.weight = Enums.TextWeight.Bolder;
          if (obj) {
            _this.maxWidth = obj["maxWidth"] != null ? obj["maxWidth"] : _this.maxWidth;
            _this.weight = parseHostConfigEnum(Enums.TextWeight, obj["weight"], Enums.TextWeight.Bolder);
          }
          return _this;
        }
        FactTitleDefinition2.prototype.getDefaultWeight = function() {
          return Enums.TextWeight.Bolder;
        };
        return FactTitleDefinition2;
      }(FactTextDefinition)
    );
    exports.FactTitleDefinition = FactTitleDefinition;
    var FactSetConfig = (
      /** @class */
      /* @__PURE__ */ function() {
        function FactSetConfig2(obj) {
          this.title = new FactTitleDefinition();
          this.value = new FactTextDefinition();
          this.spacing = 10;
          if (obj) {
            this.title = new FactTitleDefinition(obj["title"]);
            this.value = new FactTextDefinition(obj["value"]);
            this.spacing = obj.spacing && obj.spacing != null ? obj.spacing && obj.spacing : this.spacing;
          }
        }
        return FactSetConfig2;
      }()
    );
    exports.FactSetConfig = FactSetConfig;
    var ShowCardActionConfig = (
      /** @class */
      function() {
        function ShowCardActionConfig2(obj) {
          this.actionMode = Enums.ShowCardActionMode.Inline;
          this.inlineTopMargin = 16;
          this.style = Enums.ContainerStyle.Emphasis;
          if (obj) {
            this.actionMode = parseHostConfigEnum(Enums.ShowCardActionMode, obj["actionMode"], Enums.ShowCardActionMode.Inline);
            this.inlineTopMargin = obj["inlineTopMargin"] != null ? obj["inlineTopMargin"] : this.inlineTopMargin;
            this.style = obj["style"] && typeof obj["style"] === "string" ? obj["style"] : Enums.ContainerStyle.Emphasis;
          }
        }
        ShowCardActionConfig2.prototype.toJSON = function() {
          return {
            actionMode: Enums.ShowCardActionMode[this.actionMode],
            inlineTopMargin: this.inlineTopMargin,
            style: this.style
          };
        };
        return ShowCardActionConfig2;
      }()
    );
    exports.ShowCardActionConfig = ShowCardActionConfig;
    var ActionsConfig = (
      /** @class */
      function() {
        function ActionsConfig2(obj) {
          this.maxActions = 5;
          this.spacing = Enums.Spacing.Default;
          this.buttonSpacing = 20;
          this.showCard = new ShowCardActionConfig();
          this.preExpandSingleShowCardAction = false;
          this.actionsOrientation = Enums.Orientation.Horizontal;
          this.actionAlignment = Enums.ActionAlignment.Left;
          this.iconPlacement = Enums.ActionIconPlacement.LeftOfTitle;
          this.allowTitleToWrap = false;
          this.iconSize = 16;
          if (obj) {
            this.maxActions = obj["maxActions"] != null ? obj["maxActions"] : this.maxActions;
            this.spacing = parseHostConfigEnum(Enums.Spacing, obj.spacing && obj.spacing, Enums.Spacing.Default);
            this.buttonSpacing = obj["buttonSpacing"] != null ? obj["buttonSpacing"] : this.buttonSpacing;
            this.showCard = new ShowCardActionConfig(obj["showCard"]);
            this.preExpandSingleShowCardAction = Utils.parseBool(obj["preExpandSingleShowCardAction"], false);
            this.actionsOrientation = parseHostConfigEnum(Enums.Orientation, obj["actionsOrientation"], Enums.Orientation.Horizontal);
            this.actionAlignment = parseHostConfigEnum(Enums.ActionAlignment, obj["actionAlignment"], Enums.ActionAlignment.Left);
            this.iconPlacement = parseHostConfigEnum(Enums.ActionIconPlacement, obj["iconPlacement"], Enums.ActionIconPlacement.LeftOfTitle);
            this.allowTitleToWrap = obj["allowTitleToWrap"] != null ? obj["allowTitleToWrap"] : this.allowTitleToWrap;
            try {
              var sizeAndUnit = Shared.SizeAndUnit.parse(obj["iconSize"]);
              if (sizeAndUnit.unit === Enums.SizeUnit.Pixel) {
                this.iconSize = sizeAndUnit.physicalSize;
              }
            } catch (e) {
            }
          }
        }
        ActionsConfig2.prototype.toJSON = function() {
          return {
            maxActions: this.maxActions,
            spacing: Enums.Spacing[this.spacing],
            buttonSpacing: this.buttonSpacing,
            showCard: this.showCard,
            preExpandSingleShowCardAction: this.preExpandSingleShowCardAction,
            actionsOrientation: Enums.Orientation[this.actionsOrientation],
            actionAlignment: Enums.ActionAlignment[this.actionAlignment]
          };
        };
        return ActionsConfig2;
      }()
    );
    exports.ActionsConfig = ActionsConfig;
    var ColorSetDefinition = (
      /** @class */
      function() {
        function ColorSetDefinition2(obj) {
          this.default = new TextColorDefinition();
          this.dark = new TextColorDefinition();
          this.light = new TextColorDefinition();
          this.accent = new TextColorDefinition();
          this.good = new TextColorDefinition();
          this.warning = new TextColorDefinition();
          this.attention = new TextColorDefinition();
          this.parse(obj);
        }
        ColorSetDefinition2.prototype.parseSingleColor = function(obj, propertyName) {
          if (obj) {
            this[propertyName].parse(obj[propertyName]);
          }
        };
        ColorSetDefinition2.prototype.parse = function(obj) {
          if (obj) {
            this.parseSingleColor(obj, "default");
            this.parseSingleColor(obj, "dark");
            this.parseSingleColor(obj, "light");
            this.parseSingleColor(obj, "accent");
            this.parseSingleColor(obj, "good");
            this.parseSingleColor(obj, "warning");
            this.parseSingleColor(obj, "attention");
          }
        };
        return ColorSetDefinition2;
      }()
    );
    exports.ColorSetDefinition = ColorSetDefinition;
    var ContainerStyleDefinition = (
      /** @class */
      function() {
        function ContainerStyleDefinition2(obj) {
          this.foregroundColors = new ColorSetDefinition({
            "default": { default: "#333333", subtle: "#EE333333" },
            "dark": { default: "#000000", subtle: "#66000000" },
            "light": { default: "#FFFFFF", subtle: "#33000000" },
            "accent": { default: "#2E89FC", subtle: "#882E89FC" },
            "good": { default: "#028A02", subtle: "#DD027502" },
            "warning": { default: "#E69500", subtle: "#DDE69500" },
            "attention": { default: "#CC3300", subtle: "#DDCC3300" }
          });
          this.parse(obj);
        }
        ContainerStyleDefinition2.prototype.parse = function(obj) {
          if (obj) {
            this.backgroundColor = obj["backgroundColor"];
            this.foregroundColors.parse(obj["foregroundColors"]);
            this.highlightBackgroundColor = obj["highlightBackgroundColor"];
            this.highlightForegroundColor = obj["highlightForegroundColor"];
            this.borderColor = obj["borderColor"];
          }
        };
        Object.defineProperty(ContainerStyleDefinition2.prototype, "isBuiltIn", {
          get: function() {
            return false;
          },
          enumerable: false,
          configurable: true
        });
        return ContainerStyleDefinition2;
      }()
    );
    exports.ContainerStyleDefinition = ContainerStyleDefinition;
    var BuiltInContainerStyleDefinition = (
      /** @class */
      function(_super) {
        __extends(BuiltInContainerStyleDefinition2, _super);
        function BuiltInContainerStyleDefinition2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(BuiltInContainerStyleDefinition2.prototype, "isBuiltIn", {
          get: function() {
            return true;
          },
          enumerable: false,
          configurable: true
        });
        return BuiltInContainerStyleDefinition2;
      }(ContainerStyleDefinition)
    );
    var ContainerStyleSet = (
      /** @class */
      function() {
        function ContainerStyleSet2(obj) {
          this._allStyles = {};
          this._allStyles[Enums.ContainerStyle.Default] = new BuiltInContainerStyleDefinition();
          this._allStyles[Enums.ContainerStyle.Emphasis] = new BuiltInContainerStyleDefinition();
          this._allStyles[Enums.ContainerStyle.Accent] = new BuiltInContainerStyleDefinition();
          this._allStyles[Enums.ContainerStyle.Good] = new BuiltInContainerStyleDefinition();
          this._allStyles[Enums.ContainerStyle.Attention] = new BuiltInContainerStyleDefinition();
          this._allStyles[Enums.ContainerStyle.Warning] = new BuiltInContainerStyleDefinition();
          if (obj) {
            this._allStyles[Enums.ContainerStyle.Default].parse(obj[Enums.ContainerStyle.Default]);
            this._allStyles[Enums.ContainerStyle.Emphasis].parse(obj[Enums.ContainerStyle.Emphasis]);
            this._allStyles[Enums.ContainerStyle.Accent].parse(obj[Enums.ContainerStyle.Accent]);
            this._allStyles[Enums.ContainerStyle.Good].parse(obj[Enums.ContainerStyle.Good]);
            this._allStyles[Enums.ContainerStyle.Attention].parse(obj[Enums.ContainerStyle.Attention]);
            this._allStyles[Enums.ContainerStyle.Warning].parse(obj[Enums.ContainerStyle.Warning]);
            var customStyleArray = obj["customStyles"];
            if (customStyleArray && Array.isArray(customStyleArray)) {
              for (var _i = 0, customStyleArray_1 = customStyleArray; _i < customStyleArray_1.length; _i++) {
                var customStyle = customStyleArray_1[_i];
                if (customStyle) {
                  var styleName = customStyle["name"];
                  if (styleName && typeof styleName === "string") {
                    if (this._allStyles.hasOwnProperty(styleName)) {
                      this._allStyles[styleName].parse(customStyle["style"]);
                    } else {
                      this._allStyles[styleName] = new ContainerStyleDefinition(customStyle["style"]);
                    }
                  }
                }
              }
            }
          }
        }
        ContainerStyleSet2.prototype.toJSON = function() {
          var _this = this;
          var customStyleArray = [];
          Object.keys(this._allStyles).forEach(function(key) {
            if (!_this._allStyles[key].isBuiltIn) {
              customStyleArray.push({
                name: key,
                style: _this._allStyles[key]
              });
            }
          });
          var result = {
            default: this.default,
            emphasis: this.emphasis
          };
          if (customStyleArray.length > 0) {
            result.customStyles = customStyleArray;
          }
          return result;
        };
        ContainerStyleSet2.prototype.getStyleByName = function(name, defaultValue) {
          if (name && this._allStyles.hasOwnProperty(name)) {
            return this._allStyles[name];
          } else {
            return defaultValue ? defaultValue : this._allStyles[Enums.ContainerStyle.Default];
          }
        };
        Object.defineProperty(ContainerStyleSet2.prototype, "default", {
          get: function() {
            return this._allStyles[Enums.ContainerStyle.Default];
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(ContainerStyleSet2.prototype, "emphasis", {
          get: function() {
            return this._allStyles[Enums.ContainerStyle.Emphasis];
          },
          enumerable: false,
          configurable: true
        });
        return ContainerStyleSet2;
      }()
    );
    exports.ContainerStyleSet = ContainerStyleSet;
    var FontTypeDefinition = (
      /** @class */
      function() {
        function FontTypeDefinition2(fontFamily) {
          this.fontFamily = "Segoe UI,Segoe,Segoe WP,Helvetica Neue,Helvetica,sans-serif";
          this.fontSizes = {
            small: 12,
            default: 14,
            medium: 17,
            large: 21,
            extraLarge: 26
          };
          this.fontWeights = {
            lighter: 200,
            default: 400,
            bolder: 600
          };
          if (fontFamily) {
            this.fontFamily = fontFamily;
          }
        }
        FontTypeDefinition2.prototype.parse = function(obj) {
          this.fontFamily = obj["fontFamily"] || this.fontFamily;
          this.fontSizes = {
            small: obj.fontSizes && obj.fontSizes["small"] || this.fontSizes.small,
            default: obj.fontSizes && obj.fontSizes["default"] || this.fontSizes.default,
            medium: obj.fontSizes && obj.fontSizes["medium"] || this.fontSizes.medium,
            large: obj.fontSizes && obj.fontSizes["large"] || this.fontSizes.large,
            extraLarge: obj.fontSizes && obj.fontSizes["extraLarge"] || this.fontSizes.extraLarge
          };
          this.fontWeights = {
            lighter: obj.fontWeights && obj.fontWeights["lighter"] || this.fontWeights.lighter,
            default: obj.fontWeights && obj.fontWeights["default"] || this.fontWeights.default,
            bolder: obj.fontWeights && obj.fontWeights["bolder"] || this.fontWeights.bolder
          };
        };
        FontTypeDefinition2.monospace = new FontTypeDefinition2("'Courier New', Courier, monospace");
        return FontTypeDefinition2;
      }()
    );
    exports.FontTypeDefinition = FontTypeDefinition;
    var FontTypeSet = (
      /** @class */
      function() {
        function FontTypeSet2(obj) {
          this.default = new FontTypeDefinition();
          this.monospace = new FontTypeDefinition("'Courier New', Courier, monospace");
          if (obj) {
            this.default.parse(obj["default"]);
            this.monospace.parse(obj["monospace"]);
          }
        }
        FontTypeSet2.prototype.getStyleDefinition = function(style) {
          switch (style) {
            case Enums.FontType.Monospace:
              return this.monospace;
            case Enums.FontType.Default:
            default:
              return this.default;
          }
        };
        return FontTypeSet2;
      }()
    );
    exports.FontTypeSet = FontTypeSet;
    var HostConfig = (
      /** @class */
      function() {
        function HostConfig2(obj) {
          this.hostCapabilities = new host_capabilities_1.HostCapabilities();
          this.choiceSetInputValueSeparator = ",";
          this.supportsInteractivity = true;
          this.spacing = {
            small: 3,
            default: 8,
            medium: 20,
            large: 30,
            extraLarge: 40,
            padding: 15
          };
          this.separator = {
            lineThickness: 1,
            lineColor: "#EEEEEE"
          };
          this.imageSizes = {
            small: 40,
            medium: 80,
            large: 160
          };
          this.containerStyles = new ContainerStyleSet();
          this.inputs = new InputConfig();
          this.actions = new ActionsConfig();
          this.adaptiveCard = new AdaptiveCardConfig();
          this.imageSet = new ImageSetConfig();
          this.media = new MediaConfig();
          this.factSet = new FactSetConfig();
          this.table = new TableConfig();
          this.textStyles = new TextStyleSet();
          this.textBlock = new TextBlockConfig();
          this.alwaysAllowBleed = false;
          if (obj) {
            if (typeof obj === "string" || obj instanceof String) {
              obj = JSON.parse(obj);
            }
            this.choiceSetInputValueSeparator = obj && typeof obj["choiceSetInputValueSeparator"] === "string" ? obj["choiceSetInputValueSeparator"] : this.choiceSetInputValueSeparator;
            this.supportsInteractivity = obj && typeof obj["supportsInteractivity"] === "boolean" ? obj["supportsInteractivity"] : this.supportsInteractivity;
            this._legacyFontType = new FontTypeDefinition();
            this._legacyFontType.parse(obj);
            if (obj.fontTypes) {
              this.fontTypes = new FontTypeSet(obj.fontTypes);
            }
            if (obj.lineHeights) {
              this.lineHeights = {
                small: obj.lineHeights["small"],
                default: obj.lineHeights["default"],
                medium: obj.lineHeights["medium"],
                large: obj.lineHeights["large"],
                extraLarge: obj.lineHeights["extraLarge"]
              };
            }
            this.imageSizes = {
              small: obj.imageSizes && obj.imageSizes["small"] || this.imageSizes.small,
              medium: obj.imageSizes && obj.imageSizes["medium"] || this.imageSizes.medium,
              large: obj.imageSizes && obj.imageSizes["large"] || this.imageSizes.large
            };
            this.containerStyles = new ContainerStyleSet(obj["containerStyles"]);
            this.spacing = {
              small: obj.spacing && obj.spacing["small"] || this.spacing.small,
              default: obj.spacing && obj.spacing["default"] || this.spacing.default,
              medium: obj.spacing && obj.spacing["medium"] || this.spacing.medium,
              large: obj.spacing && obj.spacing["large"] || this.spacing.large,
              extraLarge: obj.spacing && obj.spacing["extraLarge"] || this.spacing.extraLarge,
              padding: obj.spacing && obj.spacing["padding"] || this.spacing.padding
            };
            this.separator = {
              lineThickness: obj.separator && obj.separator["lineThickness"] || this.separator.lineThickness,
              lineColor: obj.separator && obj.separator["lineColor"] || this.separator.lineColor
            };
            this.inputs = new InputConfig(obj.inputs || this.inputs);
            this.actions = new ActionsConfig(obj.actions || this.actions);
            this.adaptiveCard = new AdaptiveCardConfig(obj.adaptiveCard || this.adaptiveCard);
            this.imageSet = new ImageSetConfig(obj["imageSet"]);
            this.factSet = new FactSetConfig(obj["factSet"]);
            this.textStyles = new TextStyleSet(obj["textStyles"]);
            this.textBlock = new TextBlockConfig(obj["textBlock"]);
          }
        }
        HostConfig2.prototype.getFontTypeDefinition = function(style) {
          if (this.fontTypes) {
            return this.fontTypes.getStyleDefinition(style);
          } else {
            return style === Enums.FontType.Monospace ? FontTypeDefinition.monospace : this._legacyFontType;
          }
        };
        HostConfig2.prototype.getEffectiveSpacing = function(spacing) {
          switch (spacing) {
            case Enums.Spacing.Small:
              return this.spacing.small;
            case Enums.Spacing.Default:
              return this.spacing.default;
            case Enums.Spacing.Medium:
              return this.spacing.medium;
            case Enums.Spacing.Large:
              return this.spacing.large;
            case Enums.Spacing.ExtraLarge:
              return this.spacing.extraLarge;
            case Enums.Spacing.Padding:
              return this.spacing.padding;
            default:
              return 0;
          }
        };
        HostConfig2.prototype.paddingDefinitionToSpacingDefinition = function(paddingDefinition) {
          return new Shared.SpacingDefinition(this.getEffectiveSpacing(paddingDefinition.top), this.getEffectiveSpacing(paddingDefinition.right), this.getEffectiveSpacing(paddingDefinition.bottom), this.getEffectiveSpacing(paddingDefinition.left));
        };
        HostConfig2.prototype.makeCssClassNames = function() {
          var classNames = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            classNames[_i] = arguments[_i];
          }
          var result = [];
          for (var _a = 0, classNames_1 = classNames; _a < classNames_1.length; _a++) {
            var className = classNames_1[_a];
            result.push((this.cssClassNamePrefix ? this.cssClassNamePrefix + "-" : "") + className);
          }
          return result;
        };
        HostConfig2.prototype.makeCssClassName = function() {
          var classNames = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            classNames[_i] = arguments[_i];
          }
          var result = this.makeCssClassNames.apply(this, classNames).join(" ");
          return result ? result : "";
        };
        Object.defineProperty(HostConfig2.prototype, "fontFamily", {
          get: function() {
            return this._legacyFontType.fontFamily;
          },
          set: function(value) {
            this._legacyFontType.fontFamily = value;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(HostConfig2.prototype, "fontSizes", {
          get: function() {
            return this._legacyFontType.fontSizes;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(HostConfig2.prototype, "fontWeights", {
          get: function() {
            return this._legacyFontType.fontWeights;
          },
          enumerable: false,
          configurable: true
        });
        return HostConfig2;
      }()
    );
    exports.HostConfig = HostConfig;
    exports.defaultHostConfig = new HostConfig({
      supportsInteractivity: true,
      spacing: {
        small: 10,
        default: 20,
        medium: 30,
        large: 40,
        extraLarge: 50,
        padding: 20
      },
      separator: {
        lineThickness: 1,
        lineColor: "#EEEEEE"
      },
      fontTypes: {
        default: {
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          fontSizes: {
            small: 12,
            default: 14,
            medium: 17,
            large: 21,
            extraLarge: 26
          },
          fontWeights: {
            lighter: 200,
            default: 400,
            bolder: 600
          }
        },
        monospace: {
          fontFamily: "'Courier New', Courier, monospace",
          fontSizes: {
            small: 12,
            default: 14,
            medium: 17,
            large: 21,
            extraLarge: 26
          },
          fontWeights: {
            lighter: 200,
            default: 400,
            bolder: 600
          }
        }
      },
      imageSizes: {
        small: 40,
        medium: 80,
        large: 160
      },
      containerStyles: {
        default: {
          backgroundColor: "#FFFFFF",
          foregroundColors: {
            default: {
              default: "#333333",
              subtle: "#EE333333"
            },
            dark: {
              default: "#000000",
              subtle: "#66000000"
            },
            light: {
              default: "#FFFFFF",
              subtle: "#33000000"
            },
            accent: {
              default: "#2E89FC",
              subtle: "#882E89FC"
            },
            attention: {
              default: "#cc3300",
              subtle: "#DDcc3300"
            },
            good: {
              default: "#028A02",
              subtle: "#DD027502"
            },
            warning: {
              default: "#e69500",
              subtle: "#DDe69500"
            }
          }
        },
        emphasis: {
          backgroundColor: "#08000000",
          foregroundColors: {
            default: {
              default: "#333333",
              subtle: "#EE333333"
            },
            dark: {
              default: "#000000",
              subtle: "#66000000"
            },
            light: {
              default: "#FFFFFF",
              subtle: "#33000000"
            },
            accent: {
              default: "#2E89FC",
              subtle: "#882E89FC"
            },
            attention: {
              default: "#cc3300",
              subtle: "#DDcc3300"
            },
            good: {
              default: "#028A02",
              subtle: "#DD027502"
            },
            warning: {
              default: "#e69500",
              subtle: "#DDe69500"
            }
          }
        },
        accent: {
          backgroundColor: "#C7DEF9",
          foregroundColors: {
            default: {
              default: "#333333",
              subtle: "#EE333333"
            },
            dark: {
              default: "#000000",
              subtle: "#66000000"
            },
            light: {
              default: "#FFFFFF",
              subtle: "#33000000"
            },
            accent: {
              default: "#2E89FC",
              subtle: "#882E89FC"
            },
            attention: {
              default: "#cc3300",
              subtle: "#DDcc3300"
            },
            good: {
              default: "#028A02",
              subtle: "#DD027502"
            },
            warning: {
              default: "#e69500",
              subtle: "#DDe69500"
            }
          }
        },
        good: {
          backgroundColor: "#CCFFCC",
          foregroundColors: {
            default: {
              default: "#333333",
              subtle: "#EE333333"
            },
            dark: {
              default: "#000000",
              subtle: "#66000000"
            },
            light: {
              default: "#FFFFFF",
              subtle: "#33000000"
            },
            accent: {
              default: "#2E89FC",
              subtle: "#882E89FC"
            },
            attention: {
              default: "#cc3300",
              subtle: "#DDcc3300"
            },
            good: {
              default: "#028A02",
              subtle: "#DD027502"
            },
            warning: {
              default: "#e69500",
              subtle: "#DDe69500"
            }
          }
        },
        attention: {
          backgroundColor: "#FFC5B2",
          foregroundColors: {
            default: {
              default: "#333333",
              subtle: "#EE333333"
            },
            dark: {
              default: "#000000",
              subtle: "#66000000"
            },
            light: {
              default: "#FFFFFF",
              subtle: "#33000000"
            },
            accent: {
              default: "#2E89FC",
              subtle: "#882E89FC"
            },
            attention: {
              default: "#cc3300",
              subtle: "#DDcc3300"
            },
            good: {
              default: "#028A02",
              subtle: "#DD027502"
            },
            warning: {
              default: "#e69500",
              subtle: "#DDe69500"
            }
          }
        },
        warning: {
          backgroundColor: "#FFE2B2",
          foregroundColors: {
            default: {
              default: "#333333",
              subtle: "#EE333333"
            },
            dark: {
              default: "#000000",
              subtle: "#66000000"
            },
            light: {
              default: "#FFFFFF",
              subtle: "#33000000"
            },
            accent: {
              default: "#2E89FC",
              subtle: "#882E89FC"
            },
            attention: {
              default: "#cc3300",
              subtle: "#DDcc3300"
            },
            good: {
              default: "#028A02",
              subtle: "#DD027502"
            },
            warning: {
              default: "#e69500",
              subtle: "#DDe69500"
            }
          }
        }
      },
      inputs: {
        label: {
          requiredInputs: {
            weight: Enums.TextWeight.Bolder,
            suffix: " *",
            suffixColor: Enums.TextColor.Attention
          },
          optionalInputs: {
            weight: Enums.TextWeight.Bolder
          }
        },
        errorMessage: {
          color: Enums.TextColor.Attention,
          weight: Enums.TextWeight.Bolder
        }
      },
      actions: {
        maxActions: 5,
        spacing: Enums.Spacing.Default,
        buttonSpacing: 10,
        showCard: {
          actionMode: Enums.ShowCardActionMode.Inline,
          inlineTopMargin: 16
        },
        actionsOrientation: Enums.Orientation.Horizontal,
        actionAlignment: Enums.ActionAlignment.Left
      },
      adaptiveCard: {
        allowCustomStyle: false
      },
      imageSet: {
        imageSize: Enums.Size.Medium,
        maxImageHeight: 100
      },
      factSet: {
        title: {
          color: Enums.TextColor.Default,
          size: Enums.TextSize.Default,
          isSubtle: false,
          weight: Enums.TextWeight.Bolder,
          wrap: true,
          maxWidth: 150
        },
        value: {
          color: Enums.TextColor.Default,
          size: Enums.TextSize.Default,
          isSubtle: false,
          weight: Enums.TextWeight.Default,
          wrap: true
        },
        spacing: 10
      }
    });
  }
});

// node_modules/adaptivecards/lib/registry.js
var require_registry = __commonJS({
  "node_modules/adaptivecards/lib/registry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GlobalRegistry = exports.CardObjectRegistry = exports.ElementSingletonBehavior = void 0;
    var serialization_1 = require_serialization();
    var ElementSingletonBehavior;
    (function(ElementSingletonBehavior2) {
      ElementSingletonBehavior2[ElementSingletonBehavior2["Only"] = 0] = "Only";
      ElementSingletonBehavior2[ElementSingletonBehavior2["Allowed"] = 1] = "Allowed";
      ElementSingletonBehavior2[ElementSingletonBehavior2["NotAllowed"] = 2] = "NotAllowed";
    })(ElementSingletonBehavior = exports.ElementSingletonBehavior || (exports.ElementSingletonBehavior = {}));
    var CardObjectRegistry = (
      /** @class */
      function() {
        function CardObjectRegistry2() {
          this._items = {};
        }
        CardObjectRegistry2.prototype.findByName = function(typeName) {
          return this._items.hasOwnProperty(typeName) ? this._items[typeName] : void 0;
        };
        CardObjectRegistry2.prototype.clear = function() {
          this._items = {};
        };
        CardObjectRegistry2.prototype.copyTo = function(target) {
          var keys = Object.keys(this._items);
          for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            var typeRegistration = this._items[key];
            target.register(typeRegistration.typeName, typeRegistration.objectType, typeRegistration.schemaVersion, typeRegistration.singletonBehavior);
          }
        };
        CardObjectRegistry2.prototype.register = function(typeName, objectType, schemaVersion, singletonBehavior) {
          if (schemaVersion === void 0) {
            schemaVersion = serialization_1.Versions.v1_0;
          }
          if (singletonBehavior === void 0) {
            singletonBehavior = ElementSingletonBehavior.NotAllowed;
          }
          var registrationInfo = this.findByName(typeName);
          if (registrationInfo !== void 0) {
            registrationInfo.objectType = objectType;
          } else {
            registrationInfo = {
              typeName,
              objectType,
              schemaVersion,
              singletonBehavior
            };
          }
          this._items[typeName] = registrationInfo;
        };
        CardObjectRegistry2.prototype.unregister = function(typeName) {
          delete this._items[typeName];
        };
        CardObjectRegistry2.prototype.createInstance = function(typeName, targetVersion) {
          var registrationInfo = this.findByName(typeName);
          return registrationInfo && registrationInfo.schemaVersion.compareTo(targetVersion) <= 0 ? new registrationInfo.objectType() : void 0;
        };
        CardObjectRegistry2.prototype.getItemCount = function() {
          return Object.keys(this._items).length;
        };
        CardObjectRegistry2.prototype.getItemAt = function(index) {
          var _this = this;
          return Object.keys(this._items).map(function(e) {
            return _this._items[e];
          })[index];
        };
        return CardObjectRegistry2;
      }()
    );
    exports.CardObjectRegistry = CardObjectRegistry;
    var GlobalRegistry = (
      /** @class */
      function() {
        function GlobalRegistry2() {
        }
        GlobalRegistry2.populateWithDefaultElements = function(registry) {
          registry.clear();
          GlobalRegistry2.defaultElements.copyTo(registry);
        };
        GlobalRegistry2.populateWithDefaultActions = function(registry) {
          registry.clear();
          GlobalRegistry2.defaultActions.copyTo(registry);
        };
        Object.defineProperty(GlobalRegistry2, "elements", {
          get: function() {
            if (!GlobalRegistry2._elements) {
              GlobalRegistry2._elements = new CardObjectRegistry();
              GlobalRegistry2.populateWithDefaultElements(GlobalRegistry2._elements);
            }
            return GlobalRegistry2._elements;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(GlobalRegistry2, "actions", {
          get: function() {
            if (!GlobalRegistry2._actions) {
              GlobalRegistry2._actions = new CardObjectRegistry();
              GlobalRegistry2.populateWithDefaultActions(GlobalRegistry2._actions);
            }
            return GlobalRegistry2._actions;
          },
          enumerable: false,
          configurable: true
        });
        GlobalRegistry2.reset = function() {
          GlobalRegistry2._elements = void 0;
          GlobalRegistry2._actions = void 0;
        };
        GlobalRegistry2.defaultElements = new CardObjectRegistry();
        GlobalRegistry2.defaultActions = new CardObjectRegistry();
        return GlobalRegistry2;
      }()
    );
    exports.GlobalRegistry = GlobalRegistry;
  }
});

// node_modules/adaptivecards/lib/card-object.js
var require_card_object = __commonJS({
  "node_modules/adaptivecards/lib/card-object.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1; i >= 0; i--)
          if (d = decorators[i])
            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CardObject = exports.ValidationResults = void 0;
    var Enums = require_enums();
    var strings_1 = require_strings();
    var shared_1 = require_shared();
    var host_capabilities_1 = require_host_capabilities();
    var serialization_1 = require_serialization();
    var ValidationResults = (
      /** @class */
      function() {
        function ValidationResults2() {
          this.allIds = {};
          this.validationEvents = [];
        }
        ValidationResults2.prototype.addFailure = function(cardObject, event, message) {
          this.validationEvents.push({
            phase: Enums.ValidationPhase.Validation,
            source: cardObject,
            event,
            message
          });
        };
        return ValidationResults2;
      }()
    );
    exports.ValidationResults = ValidationResults;
    var CardObject = (
      /** @class */
      function(_super) {
        __extends(CardObject2, _super);
        function CardObject2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this._shouldFallback = false;
          return _this;
        }
        CardObject2.prototype.getSchemaKey = function() {
          return this.getJsonTypeName();
        };
        Object.defineProperty(CardObject2.prototype, "requires", {
          get: function() {
            return this.getValue(CardObject2.requiresProperty);
          },
          enumerable: false,
          configurable: true
        });
        CardObject2.prototype.contains = function(node) {
          if (this._renderedElement) {
            return this._renderedElement.contains(node);
          }
          return false;
        };
        CardObject2.prototype.preProcessPropertyValue = function(prop, propertyValue) {
          var value = propertyValue === void 0 ? this.getValue(prop) : propertyValue;
          if (shared_1.GlobalSettings.allowPreProcessingPropertyValues) {
            var currentObject = this;
            while (currentObject && !currentObject.onPreProcessPropertyValue) {
              currentObject = currentObject.parent;
            }
            if (currentObject && currentObject.onPreProcessPropertyValue) {
              return currentObject.onPreProcessPropertyValue(this, prop, value);
            }
          }
          return value;
        };
        CardObject2.prototype.setParent = function(value) {
          this._parent = value;
        };
        CardObject2.prototype.setShouldFallback = function(value) {
          this._shouldFallback = value;
        };
        CardObject2.prototype.shouldFallback = function() {
          return this._shouldFallback || !this.requires.areAllMet(this.hostConfig.hostCapabilities);
        };
        CardObject2.prototype.getRootObject = function() {
          var currentObject = this;
          while (currentObject.parent) {
            currentObject = currentObject.parent;
          }
          return currentObject;
        };
        CardObject2.prototype.internalValidateProperties = function(context) {
          if (this.id) {
            if (context.allIds.hasOwnProperty(this.id)) {
              if (context.allIds[this.id] === 1) {
                context.addFailure(this, Enums.ValidationEvent.DuplicateId, strings_1.Strings.errors.duplicateId(this.id));
              }
              context.allIds[this.id] += 1;
            } else {
              context.allIds[this.id] = 1;
            }
          }
        };
        CardObject2.prototype.validateProperties = function() {
          var result = new ValidationResults();
          this.internalValidateProperties(result);
          return result;
        };
        CardObject2.prototype.findDOMNodeOwner = function(node) {
          return this.contains(node) ? this : void 0;
        };
        CardObject2.prototype.releaseDOMResources = function() {
        };
        Object.defineProperty(CardObject2.prototype, "parent", {
          get: function() {
            return this._parent;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(CardObject2.prototype, "renderedElement", {
          get: function() {
            return this._renderedElement;
          },
          enumerable: false,
          configurable: true
        });
        CardObject2.typeNameProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "type", void 0, void 0, void 0, function(sender) {
          return sender.getJsonTypeName();
        });
        CardObject2.idProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "id");
        CardObject2.requiresProperty = new serialization_1.SerializableObjectProperty(serialization_1.Versions.v1_2, "requires", host_capabilities_1.HostCapabilities, false, new host_capabilities_1.HostCapabilities());
        __decorate([
          (0, serialization_1.property)(CardObject2.idProperty)
        ], CardObject2.prototype, "id", void 0);
        __decorate([
          (0, serialization_1.property)(CardObject2.requiresProperty)
        ], CardObject2.prototype, "requires", null);
        return CardObject2;
      }(serialization_1.SerializableObject)
    );
    exports.CardObject = CardObject;
  }
});

// node_modules/adaptivecards/lib/text-formatters.js
var require_text_formatters = __commonJS({
  "node_modules/adaptivecards/lib/text-formatters.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.formatText = void 0;
    var AbstractTextFormatter = (
      /** @class */
      function() {
        function AbstractTextFormatter2(regularExpression) {
          this._regularExpression = regularExpression;
        }
        AbstractTextFormatter2.prototype.format = function(lang, input) {
          var matches;
          if (input) {
            var result = input;
            while ((matches = this._regularExpression.exec(input)) != null) {
              result = result.replace(matches[0], this.internalFormat(lang, matches));
            }
            return result;
          } else {
            return input;
          }
        };
        return AbstractTextFormatter2;
      }()
    );
    var DateFormatter = (
      /** @class */
      function(_super) {
        __extends(DateFormatter2, _super);
        function DateFormatter2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        DateFormatter2.prototype.internalFormat = function(lang, matches) {
          var date = new Date(Date.parse(matches[1]));
          var format = matches[2] !== void 0 ? matches[2].toLowerCase() : "compact";
          if (format !== "compact") {
            return date.toLocaleDateString(lang, {
              day: "numeric",
              weekday: format,
              month: format,
              year: "numeric"
            });
          } else {
            return date.toLocaleDateString();
          }
        };
        return DateFormatter2;
      }(AbstractTextFormatter)
    );
    var TimeFormatter = (
      /** @class */
      function(_super) {
        __extends(TimeFormatter2, _super);
        function TimeFormatter2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        TimeFormatter2.prototype.internalFormat = function(lang, matches) {
          var date = new Date(Date.parse(matches[1]));
          return date.toLocaleTimeString(lang, { hour: "numeric", minute: "2-digit" });
        };
        return TimeFormatter2;
      }(AbstractTextFormatter)
    );
    function formatText(lang, text) {
      var formatters = [
        new DateFormatter(/\{{2}DATE\((\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|(?:(?:-|\+)\d{2}:\d{2})))(?:, ?(COMPACT|LONG|SHORT))?\)\}{2}/g),
        new TimeFormatter(/\{{2}TIME\((\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|(?:(?:-|\+)\d{2}:\d{2})))\)\}{2}/g)
      ];
      var result = text;
      for (var _i = 0, formatters_1 = formatters; _i < formatters_1.length; _i++) {
        var formatter = formatters_1[_i];
        result = formatter.format(lang, result);
      }
      return result;
    }
    exports.formatText = formatText;
  }
});

// node_modules/adaptivecards/lib/controls/constants.js
var require_constants = __commonJS({
  "node_modules/adaptivecards/lib/controls/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Constants = void 0;
    var Constants = (
      /** @class */
      function() {
        function Constants2() {
        }
        Constants2.keys = {
          tab: "Tab",
          enter: "Enter",
          escape: "Escape",
          space: " ",
          up: "ArrowUp",
          down: "ArrowDown",
          delete: "Delete"
        };
        return Constants2;
      }()
    );
    exports.Constants = Constants;
  }
});

// node_modules/adaptivecards/lib/controls/menu-item.js
var require_menu_item = __commonJS({
  "node_modules/adaptivecards/lib/controls/menu-item.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MenuItem = void 0;
    var host_config_1 = require_host_config();
    var constants_1 = require_constants();
    var MenuItem = (
      /** @class */
      function() {
        function MenuItem2(key, value) {
          this._isEnabled = true;
          this.key = key;
          this._value = value;
        }
        MenuItem2.prototype.click = function() {
          if (this.isEnabled && this.onClick) {
            this.onClick(this);
          }
        };
        MenuItem2.prototype.updateCssClasses = function() {
          if (this._element) {
            var effectiveHostConfig = this._hostConfig ? this._hostConfig : host_config_1.defaultHostConfig;
            this._element.className = effectiveHostConfig.makeCssClassName("ac-ctrl");
            this._element.classList.add(effectiveHostConfig.makeCssClassName(this.isEnabled ? "ac-ctrl-dropdown-item" : "ac-ctrl-dropdown-item-disabled"));
            if (!this.isEnabled) {
              this._element.classList.add(effectiveHostConfig.makeCssClassName("ac-disabled"));
            }
          }
        };
        MenuItem2.prototype.toString = function() {
          return this.value;
        };
        MenuItem2.prototype.render = function(hostConfig) {
          var _this = this;
          this._hostConfig = hostConfig;
          if (!this._element) {
            this._element = document.createElement("span");
            this._element.innerText = this.value;
            this._element.setAttribute("role", "menuitem");
            if (!this.isEnabled) {
              this._element.setAttribute("aria-disabled", "true");
            }
            this._element.setAttribute("aria-current", "false");
            this._element.onmouseup = function(_e) {
              _this.click();
            };
            this._element.onkeydown = function(e) {
              if (e.key === constants_1.Constants.keys.enter) {
                e.cancelBubble = true;
                _this.click();
              }
            };
            this.updateCssClasses();
          }
          return this._element;
        };
        Object.defineProperty(MenuItem2.prototype, "value", {
          get: function() {
            return this._value;
          },
          set: function(newValue) {
            this._value = newValue;
            if (this._element) {
              this._element.innerText = newValue;
            }
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(MenuItem2.prototype, "isEnabled", {
          get: function() {
            return this._isEnabled;
          },
          set: function(value) {
            if (this._isEnabled !== value) {
              this._isEnabled = value;
              this.updateCssClasses();
            }
          },
          enumerable: false,
          configurable: true
        });
        return MenuItem2;
      }()
    );
    exports.MenuItem = MenuItem;
  }
});

// node_modules/adaptivecards/lib/controls/collection.js
var require_collection = __commonJS({
  "node_modules/adaptivecards/lib/controls/collection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Collection = void 0;
    var Collection = (
      /** @class */
      function() {
        function Collection2() {
          this._items = [];
        }
        Collection2.prototype.get = function(index) {
          return this._items[index];
        };
        Collection2.prototype.add = function(item) {
          this._items.push(item);
          if (this.onItemAdded) {
            this.onItemAdded(item);
          }
        };
        Collection2.prototype.remove = function(item) {
          var i = this._items.indexOf(item);
          if (i >= 0) {
            this._items = this._items.splice(i, 1);
            if (this.onItemRemoved) {
              this.onItemRemoved(item);
            }
          }
        };
        Collection2.prototype.indexOf = function(item) {
          return this._items.indexOf(item);
        };
        Object.defineProperty(Collection2.prototype, "length", {
          get: function() {
            return this._items.length;
          },
          enumerable: false,
          configurable: true
        });
        return Collection2;
      }()
    );
    exports.Collection = Collection;
  }
});

// node_modules/adaptivecards/lib/controls/popup-control.js
var require_popup_control = __commonJS({
  "node_modules/adaptivecards/lib/controls/popup-control.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PopupControl = void 0;
    var constants_1 = require_constants();
    var Utils = require_utils();
    var host_config_1 = require_host_config();
    var PopupControl = (
      /** @class */
      function() {
        function PopupControl2() {
          this._isOpen = false;
        }
        PopupControl2.prototype.keyDown = function(e) {
          switch (e.key) {
            case constants_1.Constants.keys.escape:
              this.closePopup(true);
              break;
          }
        };
        PopupControl2.prototype.render = function(_rootElementBounds) {
          var _this = this;
          var element = document.createElement("div");
          element.tabIndex = 0;
          element.className = this.hostConfig.makeCssClassName("ac-ctrl", "ac-ctrl-popup-container");
          element.setAttribute("role", "dialog");
          element.setAttribute("aria-modal", "true");
          element.onkeydown = function(e) {
            _this.keyDown(e);
            return !e.cancelBubble;
          };
          element.appendChild(this.renderContent());
          return element;
        };
        PopupControl2.prototype.focus = function() {
          if (this._popupElement) {
            this._popupElement.firstElementChild.focus();
          }
        };
        PopupControl2.prototype.popup = function(rootElement) {
          var _a, _b, _c, _d, _f;
          var _this = this;
          if (!this._isOpen) {
            this._overlayElement = document.createElement("div");
            this._overlayElement.className = this.hostConfig.makeCssClassName("ac-ctrl-overlay");
            this._overlayElement.tabIndex = 0;
            this._overlayElement.style.width = document.documentElement.scrollWidth + "px";
            this._overlayElement.style.height = document.documentElement.scrollHeight + "px";
            this._overlayElement.onfocus = function(_e) {
              _this.closePopup(true);
            };
            document.body.appendChild(this._overlayElement);
            var rootElementBounds = rootElement.getBoundingClientRect();
            this._popupElement = this.render(rootElementBounds);
            (_a = this._popupElement.classList).remove.apply(_a, this.hostConfig.makeCssClassNames("ac-ctrl-slide", "ac-ctrl-slideLeftToRight", "ac-ctrl-slideRightToLeft", "ac-ctrl-slideTopToBottom", "ac-ctrl-slideRightToLeft"));
            window.addEventListener("resize", function(_e) {
              _this.closePopup(true);
            });
            var rootElementLabel = rootElement.getAttribute("aria-label");
            if (rootElementLabel) {
              this._popupElement.setAttribute("aria-label", rootElementLabel);
            }
            this._overlayElement.appendChild(this._popupElement);
            var popupElementBounds = this._popupElement.getBoundingClientRect();
            var availableSpaceBelow = window.innerHeight - rootElementBounds.bottom;
            var availableSpaceAbove = rootElementBounds.top;
            var availableSpaceRight = window.innerWidth - rootElementBounds.right;
            var availableSpaceLeft = rootElementBounds.left;
            var left = rootElementBounds.left + Utils.getScrollX();
            var top_1;
            if (availableSpaceAbove < popupElementBounds.height && availableSpaceBelow < popupElementBounds.height) {
              var actualPopupHeight = Math.min(popupElementBounds.height, window.innerHeight);
              this._popupElement.style.maxHeight = actualPopupHeight + "px";
              if (actualPopupHeight < popupElementBounds.height) {
                top_1 = Utils.getScrollY();
              } else {
                top_1 = Utils.getScrollY() + rootElementBounds.top + (rootElementBounds.height - actualPopupHeight) / 2;
              }
              if (availableSpaceLeft < popupElementBounds.width && availableSpaceRight < popupElementBounds.width) {
                var actualPopupWidth = Math.min(popupElementBounds.width, window.innerWidth);
                this._popupElement.style.maxWidth = actualPopupWidth + "px";
                if (actualPopupWidth < popupElementBounds.width) {
                  left = Utils.getScrollX();
                } else {
                  left = Utils.getScrollX() + rootElementBounds.left + (rootElementBounds.width - actualPopupWidth) / 2;
                }
              } else {
                if (availableSpaceRight >= popupElementBounds.width) {
                  left = Utils.getScrollX() + rootElementBounds.right;
                  (_b = this._popupElement.classList).add.apply(_b, this.hostConfig.makeCssClassNames("ac-ctrl-slide", "ac-ctrl-slideLeftToRight"));
                } else {
                  left = Utils.getScrollX() + rootElementBounds.left - popupElementBounds.width;
                  (_c = this._popupElement.classList).add.apply(_c, this.hostConfig.makeCssClassNames("ac-ctrl-slide", "ac-ctrl-slideRightToLeft"));
                }
              }
            } else {
              if (availableSpaceBelow >= popupElementBounds.height) {
                top_1 = Utils.getScrollY() + rootElementBounds.bottom;
                (_d = this._popupElement.classList).add.apply(_d, this.hostConfig.makeCssClassNames("ac-ctrl-slide", "ac-ctrl-slideTopToBottom"));
              } else {
                top_1 = Utils.getScrollY() + rootElementBounds.top - popupElementBounds.height;
                (_f = this._popupElement.classList).add.apply(_f, this.hostConfig.makeCssClassNames("ac-ctrl-slide", "ac-ctrl-slideBottomToTop"));
              }
              if (availableSpaceRight < popupElementBounds.width) {
                left = Utils.getScrollX() + rootElementBounds.right - popupElementBounds.width;
              }
            }
            this._popupElement.style.left = left + "px";
            this._popupElement.style.top = top_1 + "px";
            this._popupElement.focus();
            this._isOpen = true;
          }
        };
        PopupControl2.prototype.closePopup = function(wasCancelled) {
          if (this._isOpen) {
            document.body.removeChild(this._overlayElement);
            this._isOpen = false;
            if (this.onClose) {
              this.onClose(this, wasCancelled);
            }
          }
        };
        Object.defineProperty(PopupControl2.prototype, "hostConfig", {
          get: function() {
            return this._hostConfig ? this._hostConfig : host_config_1.defaultHostConfig;
          },
          set: function(value) {
            this._hostConfig = value;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(PopupControl2.prototype, "isOpen", {
          get: function() {
            return this._isOpen;
          },
          enumerable: false,
          configurable: true
        });
        return PopupControl2;
      }()
    );
    exports.PopupControl = PopupControl;
  }
});

// node_modules/adaptivecards/lib/controls/popup-menu.js
var require_popup_menu = __commonJS({
  "node_modules/adaptivecards/lib/controls/popup-menu.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PopupMenu = void 0;
    var constants_1 = require_constants();
    var collection_1 = require_collection();
    var popup_control_1 = require_popup_control();
    var PopupMenu = (
      /** @class */
      function(_super) {
        __extends(PopupMenu2, _super);
        function PopupMenu2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this._items = new collection_1.Collection();
          _this._renderedItems = [];
          _this._selectedIndex = -1;
          return _this;
        }
        PopupMenu2.prototype.renderContent = function() {
          var element = document.createElement("div");
          element.className = this.hostConfig.makeCssClassName("ac-ctrl ac-popup");
          element.setAttribute("role", "listbox");
          for (var i = 0; i < this._items.length; i++) {
            var renderedItem = this._items.get(i).render(this.hostConfig);
            renderedItem.tabIndex = 0;
            element.appendChild(renderedItem);
            if (i === this.selectedIndex) {
              renderedItem.focus();
            }
            this._renderedItems.push(renderedItem);
          }
          return element;
        };
        PopupMenu2.prototype.keyDown = function(e) {
          _super.prototype.keyDown.call(this, e);
          var selectedItemIndex = this._selectedIndex;
          switch (e.key) {
            case constants_1.Constants.keys.tab:
              this.closePopup(true);
              break;
            case constants_1.Constants.keys.up:
              if (selectedItemIndex <= 0) {
                selectedItemIndex = this._renderedItems.length - 1;
              } else {
                selectedItemIndex--;
                if (selectedItemIndex < 0) {
                  selectedItemIndex = this._renderedItems.length - 1;
                }
              }
              this.selectedIndex = selectedItemIndex;
              e.cancelBubble = true;
              break;
            case constants_1.Constants.keys.down:
              if (selectedItemIndex < 0) {
                selectedItemIndex = 0;
              } else {
                selectedItemIndex++;
                if (selectedItemIndex >= this._renderedItems.length) {
                  selectedItemIndex = 0;
                }
              }
              this.selectedIndex = selectedItemIndex;
              e.cancelBubble = true;
              break;
          }
        };
        Object.defineProperty(PopupMenu2.prototype, "items", {
          get: function() {
            return this._items;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(PopupMenu2.prototype, "selectedIndex", {
          get: function() {
            return this._selectedIndex;
          },
          set: function(index) {
            if (index >= 0 && index < this._renderedItems.length) {
              this._renderedItems[index].focus();
              this._selectedIndex = index;
            }
          },
          enumerable: false,
          configurable: true
        });
        return PopupMenu2;
      }(popup_control_1.PopupControl)
    );
    exports.PopupMenu = PopupMenu;
  }
});

// node_modules/adaptivecards/lib/controls/index.js
var require_controls = __commonJS({
  "node_modules/adaptivecards/lib/controls/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_menu_item(), exports);
    __exportStar(require_popup_menu(), exports);
  }
});

// node_modules/adaptivecards/lib/card-elements.js
var require_card_elements = __commonJS({
  "node_modules/adaptivecards/lib/card-elements.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1; i >= 0; i--)
          if (d = decorators[i])
            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContainerWithActions = exports.ColumnSet = exports.Column = exports.Container = exports.BackgroundImage = exports.ContainerBase = exports.StylableCardElementContainer = exports.ContainerStyleProperty = exports.ActionSet = exports.ShowCardAction = exports.HttpAction = exports.HttpHeader = exports.ToggleVisibilityAction = exports.OpenUrlAction = exports.ExecuteAction = exports.SubmitAction = exports.SubmitActionBase = exports.Action = exports.TimeInput = exports.TimeProperty = exports.DateInput = exports.NumberInput = exports.ChoiceSetInput = exports.Choice = exports.ToggleInput = exports.TextInput = exports.Input = exports.Media = exports.YouTubePlayer = exports.DailymotionPlayer = exports.VimeoPlayer = exports.IFrameMediaMediaPlayer = exports.CustomMediaPlayer = exports.HTML5MediaPlayer = exports.MediaPlayer = exports.MediaSource = exports.CaptionSource = exports.ContentSource = exports.ImageSet = exports.CardElementContainer = exports.Image = exports.FactSet = exports.Fact = exports.RichTextBlock = exports.TextRun = exports.TextBlock = exports.BaseTextBlock = exports.ActionProperty = exports.CardElement = exports.renderSeparation = void 0;
    exports.SerializationContext = exports.AdaptiveCard = exports.Authentication = exports.TokenExchangeResource = exports.AuthCardButton = exports.RefreshDefinition = exports.RefreshActionProperty = void 0;
    var Enums = require_enums();
    var shared_1 = require_shared();
    var Utils = require_utils();
    var host_config_1 = require_host_config();
    var TextFormatters = require_text_formatters();
    var card_object_1 = require_card_object();
    var serialization_1 = require_serialization();
    var registry_1 = require_registry();
    var strings_1 = require_strings();
    var controls_1 = require_controls();
    function clearElement(element) {
      var _a, _b;
      var trustedHtml = typeof window === "undefined" ? "" : (_b = (_a = window.trustedTypes) === null || _a === void 0 ? void 0 : _a.emptyHTML) !== null && _b !== void 0 ? _b : "";
      element.innerHTML = trustedHtml;
    }
    function renderSeparation(hostConfig, separationDefinition, orientation) {
      if (separationDefinition.spacing > 0 || separationDefinition.lineThickness && separationDefinition.lineThickness > 0) {
        var separator = document.createElement("div");
        separator.className = hostConfig.makeCssClassName("ac-" + (orientation === Enums.Orientation.Horizontal ? "horizontal" : "vertical") + "-separator");
        separator.setAttribute("aria-hidden", "true");
        var color = separationDefinition.lineColor ? Utils.stringToCssColor(separationDefinition.lineColor) : "";
        if (orientation === Enums.Orientation.Horizontal) {
          if (separationDefinition.lineThickness) {
            separator.style.paddingTop = separationDefinition.spacing / 2 + "px";
            separator.style.marginBottom = separationDefinition.spacing / 2 + "px";
            separator.style.borderBottom = separationDefinition.lineThickness + "px solid " + color;
          } else {
            separator.style.height = separationDefinition.spacing + "px";
          }
        } else {
          if (separationDefinition.lineThickness) {
            separator.style.paddingLeft = separationDefinition.spacing / 2 + "px";
            separator.style.marginRight = separationDefinition.spacing / 2 + "px";
            separator.style.borderRight = separationDefinition.lineThickness + "px solid " + color;
          } else {
            separator.style.width = separationDefinition.spacing + "px";
          }
        }
        separator.style.overflow = "hidden";
        separator.style.flex = "0 0 auto";
        return separator;
      } else {
        return void 0;
      }
    }
    exports.renderSeparation = renderSeparation;
    var CardElement = (
      /** @class */
      function(_super) {
        __extends(CardElement2, _super);
        function CardElement2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this._truncatedDueToOverflow = false;
          return _this;
        }
        Object.defineProperty(CardElement2.prototype, "lang", {
          get: function() {
            var lang = this.getValue(CardElement2.langProperty);
            if (lang) {
              return lang;
            } else {
              if (this.parent) {
                return this.parent.lang;
              } else {
                return void 0;
              }
            }
          },
          set: function(value) {
            this.setValue(CardElement2.langProperty, value);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(CardElement2.prototype, "isVisible", {
          get: function() {
            return this.getValue(CardElement2.isVisibleProperty);
          },
          set: function(value) {
            if (shared_1.GlobalSettings.useAdvancedCardBottomTruncation && !value) {
              this.undoOverflowTruncation();
            }
            if (this.isVisible !== value) {
              this.setValue(CardElement2.isVisibleProperty, value);
              this.updateRenderedElementVisibility();
              if (this._renderedElement) {
                raiseElementVisibilityChangedEvent(this);
              }
            }
            if (this._renderedElement) {
              this._renderedElement.setAttribute("aria-expanded", value.toString());
            }
          },
          enumerable: false,
          configurable: true
        });
        CardElement2.prototype.internalRenderSeparator = function() {
          var renderedSeparator = renderSeparation(this.hostConfig, {
            spacing: this.hostConfig.getEffectiveSpacing(this.spacing),
            lineThickness: this.separator ? this.hostConfig.separator.lineThickness : void 0,
            lineColor: this.separator ? this.hostConfig.separator.lineColor : void 0
          }, this.separatorOrientation);
          if (shared_1.GlobalSettings.alwaysBleedSeparators && renderedSeparator && this.separatorOrientation === Enums.Orientation.Horizontal) {
            var parentContainer = this.getParentContainer();
            if (parentContainer && parentContainer.getEffectivePadding()) {
              var parentPhysicalPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(parentContainer.getEffectivePadding());
              renderedSeparator.style.marginLeft = "-" + parentPhysicalPadding.left + "px";
              renderedSeparator.style.marginRight = "-" + parentPhysicalPadding.right + "px";
            }
          }
          return renderedSeparator;
        };
        CardElement2.prototype.updateRenderedElementVisibility = function() {
          var displayMode = this.isDesignMode() || this.isVisible ? this._defaultRenderedElementDisplayMode : "none";
          if (this._renderedElement) {
            if (displayMode) {
              this._renderedElement.style.display = displayMode;
            } else {
              this._renderedElement.style.removeProperty("display");
            }
          }
          if (this._separatorElement) {
            if (this.parent && this.parent.isFirstElement(this)) {
              this._separatorElement.style.display = "none";
            } else {
              if (displayMode) {
                this._separatorElement.style.display = displayMode;
              } else {
                this._separatorElement.style.removeProperty("display");
              }
            }
          }
        };
        CardElement2.prototype.hideElementDueToOverflow = function() {
          if (this._renderedElement && this.isVisible) {
            this._renderedElement.style.visibility = "hidden";
            this.isVisible = false;
            raiseElementVisibilityChangedEvent(this, false);
          }
        };
        CardElement2.prototype.showElementHiddenDueToOverflow = function() {
          if (this._renderedElement && !this.isVisible) {
            this._renderedElement.style.removeProperty("visibility");
            this.isVisible = true;
            raiseElementVisibilityChangedEvent(this, false);
          }
        };
        CardElement2.prototype.handleOverflow = function(maxHeight) {
          if (this.isVisible || this.isHiddenDueToOverflow()) {
            var handled = this.truncateOverflow(maxHeight);
            this._truncatedDueToOverflow = handled || this._truncatedDueToOverflow;
            if (!handled) {
              this.hideElementDueToOverflow();
            } else if (handled && !this.isVisible) {
              this.showElementHiddenDueToOverflow();
            }
          }
        };
        CardElement2.prototype.resetOverflow = function() {
          var sizeChanged = false;
          if (this._truncatedDueToOverflow) {
            this.undoOverflowTruncation();
            this._truncatedDueToOverflow = false;
            sizeChanged = true;
          }
          if (this.isHiddenDueToOverflow()) {
            this.showElementHiddenDueToOverflow();
          }
          return sizeChanged;
        };
        CardElement2.prototype.getDefaultSerializationContext = function() {
          return new SerializationContext();
        };
        CardElement2.prototype.createPlaceholderElement = function() {
          var styleDefinition = this.getEffectiveStyleDefinition();
          var foregroundCssColor = Utils.stringToCssColor(styleDefinition.foregroundColors.default.subtle);
          var element = document.createElement("div");
          element.style.border = "1px dashed " + foregroundCssColor;
          element.style.padding = "4px";
          element.style.minHeight = "32px";
          element.style.fontSize = "10px";
          if (foregroundCssColor) {
            element.style.color = foregroundCssColor;
          }
          element.innerText = "Empty " + this.getJsonTypeName();
          return element;
        };
        CardElement2.prototype.adjustRenderedElementSize = function(renderedElement) {
          if (this.height === "auto") {
            renderedElement.style.flex = "0 0 auto";
          } else {
            renderedElement.style.flex = "1 1 auto";
          }
        };
        CardElement2.prototype.isDisplayed = function() {
          return this._renderedElement !== void 0 && this.isVisible && this._renderedElement.offsetHeight > 0;
        };
        CardElement2.prototype.overrideInternalRender = function() {
          return this.internalRender();
        };
        CardElement2.prototype.applyPadding = function() {
          if (this.separatorElement && this.separatorOrientation === Enums.Orientation.Horizontal) {
            if (shared_1.GlobalSettings.alwaysBleedSeparators && !this.isBleeding()) {
              var padding = new shared_1.PaddingDefinition();
              this.getImmediateSurroundingPadding(padding);
              var physicalPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(padding);
              this.separatorElement.style.marginLeft = "-" + physicalPadding.left + "px";
              this.separatorElement.style.marginRight = "-" + physicalPadding.right + "px";
            } else {
              this.separatorElement.style.marginRight = "0";
              this.separatorElement.style.marginLeft = "0";
            }
          }
        };
        CardElement2.prototype.truncateOverflow = function(_maxHeight) {
          return false;
        };
        CardElement2.prototype.undoOverflowTruncation = function() {
          return;
        };
        CardElement2.prototype.getDefaultPadding = function() {
          return new shared_1.PaddingDefinition();
        };
        CardElement2.prototype.getHasBackground = function(ignoreBackgroundImages) {
          if (ignoreBackgroundImages === void 0) {
            ignoreBackgroundImages = false;
          }
          return false;
        };
        CardElement2.prototype.getHasBorder = function() {
          return false;
        };
        CardElement2.prototype.getPadding = function() {
          return this._padding;
        };
        CardElement2.prototype.setPadding = function(value) {
          this._padding = value;
        };
        CardElement2.prototype.shouldSerialize = function(context) {
          return context.elementRegistry.findByName(this.getJsonTypeName()) !== void 0;
        };
        Object.defineProperty(CardElement2.prototype, "useDefaultSizing", {
          get: function() {
            return true;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(CardElement2.prototype, "separatorOrientation", {
          get: function() {
            return Enums.Orientation.Horizontal;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(CardElement2.prototype, "defaultStyle", {
          get: function() {
            return Enums.ContainerStyle.Default;
          },
          enumerable: false,
          configurable: true
        });
        CardElement2.prototype.parse = function(source, context) {
          _super.prototype.parse.call(this, source, context ? context : new SerializationContext());
        };
        CardElement2.prototype.asString = function() {
          return "";
        };
        CardElement2.prototype.isBleeding = function() {
          return false;
        };
        CardElement2.prototype.getEffectiveStyle = function() {
          if (this.parent) {
            return this.parent.getEffectiveStyle();
          }
          return this.defaultStyle;
        };
        CardElement2.prototype.getEffectiveStyleDefinition = function() {
          return this.hostConfig.containerStyles.getStyleByName(this.getEffectiveStyle());
        };
        CardElement2.prototype.getEffectiveTextStyleDefinition = function() {
          if (this.parent) {
            return this.parent.getEffectiveTextStyleDefinition();
          }
          return this.hostConfig.textStyles.default;
        };
        CardElement2.prototype.getForbiddenActionTypes = function() {
          return [];
        };
        CardElement2.prototype.getImmediateSurroundingPadding = function(result, processTop, processRight, processBottom, processLeft) {
          if (processTop === void 0) {
            processTop = true;
          }
          if (processRight === void 0) {
            processRight = true;
          }
          if (processBottom === void 0) {
            processBottom = true;
          }
          if (processLeft === void 0) {
            processLeft = true;
          }
          if (this.parent) {
            var doProcessTop = processTop && this.parent.isTopElement(this);
            var doProcessRight = processRight && this.parent.isRightMostElement(this);
            var doProcessBottom = processBottom && this.parent.isBottomElement(this);
            var doProcessLeft = processLeft && this.parent.isLeftMostElement(this);
            var effectivePadding = this.parent.getEffectivePadding();
            if (effectivePadding) {
              if (doProcessTop && effectivePadding.top !== Enums.Spacing.None) {
                result.top = effectivePadding.top;
                doProcessTop = false;
              }
              if (doProcessRight && effectivePadding.right !== Enums.Spacing.None) {
                result.right = effectivePadding.right;
                doProcessRight = false;
              }
              if (doProcessBottom && effectivePadding.bottom !== Enums.Spacing.None) {
                result.bottom = effectivePadding.bottom;
                doProcessBottom = false;
              }
              if (doProcessLeft && effectivePadding.left !== Enums.Spacing.None) {
                result.left = effectivePadding.left;
                doProcessLeft = false;
              }
            }
            if (doProcessTop || doProcessRight || doProcessBottom || doProcessLeft) {
              this.parent.getImmediateSurroundingPadding(result, doProcessTop, doProcessRight, doProcessBottom, doProcessLeft);
            }
          }
        };
        CardElement2.prototype.getActionCount = function() {
          return 0;
        };
        CardElement2.prototype.getActionAt = function(index) {
          throw new Error(strings_1.Strings.errors.indexOutOfRange(index));
        };
        CardElement2.prototype.indexOfAction = function(action) {
          for (var i = 0; i < this.getActionCount(); i++) {
            if (this.getActionAt(i) === action) {
              return i;
            }
          }
          return -1;
        };
        CardElement2.prototype.remove = function() {
          if (this.parent && this.parent instanceof CardElementContainer) {
            return this.parent.removeItem(this);
          }
          return false;
        };
        CardElement2.prototype.render = function() {
          this._renderedElement = this.overrideInternalRender();
          this._separatorElement = this.internalRenderSeparator();
          if (this._renderedElement) {
            if (this.id) {
              this._renderedElement.id = this.id;
            }
            if (this.customCssSelector) {
              this._renderedElement.classList.add(this.customCssSelector);
            }
            this._renderedElement.style.boxSizing = "border-box";
            this._defaultRenderedElementDisplayMode = this._renderedElement.style.display ? this._renderedElement.style.display : void 0;
            this.adjustRenderedElementSize(this._renderedElement);
            this.updateLayout(false);
          } else if (this.isDesignMode()) {
            this._renderedElement = this.createPlaceholderElement();
          }
          this.getRootElement().updateActionsEnabledState();
          return this._renderedElement;
        };
        CardElement2.prototype.updateLayout = function(_processChildren) {
          if (_processChildren === void 0) {
            _processChildren = true;
          }
          this.updateRenderedElementVisibility();
          this.applyPadding();
        };
        CardElement2.prototype.updateActionsEnabledState = function() {
          var allActions = this.getRootElement().getAllActions();
          for (var _i = 0, allActions_1 = allActions; _i < allActions_1.length; _i++) {
            var action = allActions_1[_i];
            action.updateEnabledState();
          }
        };
        CardElement2.prototype.indexOf = function(_cardElement) {
          return -1;
        };
        CardElement2.prototype.isDesignMode = function() {
          var rootElement = this.getRootElement();
          return rootElement instanceof AdaptiveCard && rootElement.designMode;
        };
        CardElement2.prototype.isFirstElement = function(_element) {
          return true;
        };
        CardElement2.prototype.isLastElement = function(_element) {
          return true;
        };
        CardElement2.prototype.isAtTheVeryLeft = function() {
          return this.parent ? this.parent.isLeftMostElement(this) && this.parent.isAtTheVeryLeft() : true;
        };
        CardElement2.prototype.isAtTheVeryRight = function() {
          return this.parent ? this.parent.isRightMostElement(this) && this.parent.isAtTheVeryRight() : true;
        };
        CardElement2.prototype.isAtTheVeryTop = function() {
          return this.parent ? this.parent.isFirstElement(this) && this.parent.isAtTheVeryTop() : true;
        };
        CardElement2.prototype.isAtTheVeryBottom = function() {
          return this.parent ? this.parent.isLastElement(this) && this.parent.isAtTheVeryBottom() : true;
        };
        CardElement2.prototype.isBleedingAtTop = function() {
          return false;
        };
        CardElement2.prototype.isBleedingAtBottom = function() {
          return false;
        };
        CardElement2.prototype.isLeftMostElement = function(_element) {
          return true;
        };
        CardElement2.prototype.isRightMostElement = function(_element) {
          return true;
        };
        CardElement2.prototype.isTopElement = function(element) {
          return this.isFirstElement(element);
        };
        CardElement2.prototype.isBottomElement = function(element) {
          return this.isLastElement(element);
        };
        CardElement2.prototype.isHiddenDueToOverflow = function() {
          return this._renderedElement !== void 0 && this._renderedElement.style.visibility === "hidden";
        };
        CardElement2.prototype.getRootElement = function() {
          return this.getRootObject();
        };
        CardElement2.prototype.getParentContainer = function() {
          var currentElement = this.parent;
          while (currentElement) {
            if (currentElement instanceof Container) {
              return currentElement;
            }
            currentElement = currentElement.parent;
          }
          return void 0;
        };
        CardElement2.prototype.getAllInputs = function(processActions) {
          if (processActions === void 0) {
            processActions = true;
          }
          return [];
        };
        CardElement2.prototype.getAllActions = function() {
          var result = [];
          for (var i = 0; i < this.getActionCount(); i++) {
            var action = this.getActionAt(i);
            if (action) {
              result.push(action);
            }
          }
          return result;
        };
        CardElement2.prototype.getResourceInformation = function() {
          return [];
        };
        CardElement2.prototype.getElementById = function(id) {
          return this.id === id ? this : void 0;
        };
        CardElement2.prototype.getActionById = function(_id) {
          return void 0;
        };
        CardElement2.prototype.getEffectivePadding = function() {
          var padding = this.getPadding();
          return padding ? padding : this.getDefaultPadding();
        };
        CardElement2.prototype.getEffectiveHorizontalAlignment = function() {
          if (this.horizontalAlignment !== void 0) {
            return this.horizontalAlignment;
          }
          if (this.parent) {
            return this.parent.getEffectiveHorizontalAlignment();
          }
          return Enums.HorizontalAlignment.Left;
        };
        Object.defineProperty(CardElement2.prototype, "hostConfig", {
          get: function() {
            if (this._hostConfig) {
              return this._hostConfig;
            } else {
              if (this.parent) {
                return this.parent.hostConfig;
              } else {
                return host_config_1.defaultHostConfig;
              }
            }
          },
          set: function(value) {
            this._hostConfig = value;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(CardElement2.prototype, "index", {
          get: function() {
            if (this.parent) {
              return this.parent.indexOf(this);
            } else {
              return 0;
            }
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(CardElement2.prototype, "isInteractive", {
          get: function() {
            return false;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(CardElement2.prototype, "isStandalone", {
          get: function() {
            return true;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(CardElement2.prototype, "isInline", {
          get: function() {
            return false;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(CardElement2.prototype, "hasVisibleSeparator", {
          get: function() {
            if (this.parent && this.separatorElement) {
              return !this.parent.isFirstElement(this) && (this.isVisible || this.isDesignMode());
            } else {
              return false;
            }
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(CardElement2.prototype, "separatorElement", {
          get: function() {
            return this._separatorElement;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(CardElement2.prototype, "parent", {
          get: function() {
            return this._parent;
          },
          enumerable: false,
          configurable: true
        });
        CardElement2.prototype.getElementSingletonBehavior = function() {
          return registry_1.ElementSingletonBehavior.NotAllowed;
        };
        CardElement2.langProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_1, "lang", true, /^[a-z]{2,3}$/gi);
        CardElement2.isVisibleProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_2, "isVisible", true);
        CardElement2.separatorProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_0, "separator", false);
        CardElement2.heightProperty = new serialization_1.ValueSetProperty(serialization_1.Versions.v1_1, "height", [{ value: "auto" }, { value: "stretch" }], "auto");
        CardElement2.horizontalAlignmentProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "horizontalAlignment", Enums.HorizontalAlignment);
        CardElement2.spacingProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "spacing", Enums.Spacing, Enums.Spacing.Default);
        __decorate([
          (0, serialization_1.property)(CardElement2.horizontalAlignmentProperty)
        ], CardElement2.prototype, "horizontalAlignment", void 0);
        __decorate([
          (0, serialization_1.property)(CardElement2.spacingProperty)
        ], CardElement2.prototype, "spacing", void 0);
        __decorate([
          (0, serialization_1.property)(CardElement2.separatorProperty)
        ], CardElement2.prototype, "separator", void 0);
        __decorate([
          (0, serialization_1.property)(CardElement2.heightProperty)
        ], CardElement2.prototype, "height", void 0);
        __decorate([
          (0, serialization_1.property)(CardElement2.langProperty)
        ], CardElement2.prototype, "lang", null);
        __decorate([
          (0, serialization_1.property)(CardElement2.isVisibleProperty)
        ], CardElement2.prototype, "isVisible", null);
        return CardElement2;
      }(card_object_1.CardObject)
    );
    exports.CardElement = CardElement;
    var ActionProperty = (
      /** @class */
      function(_super) {
        __extends(ActionProperty2, _super);
        function ActionProperty2(targetVersion, name, forbiddenActionTypes) {
          if (forbiddenActionTypes === void 0) {
            forbiddenActionTypes = [];
          }
          var _this = _super.call(this, targetVersion, name, void 0) || this;
          _this.targetVersion = targetVersion;
          _this.name = name;
          _this.forbiddenActionTypes = forbiddenActionTypes;
          return _this;
        }
        ActionProperty2.prototype.parse = function(sender, source, context) {
          var parent = sender;
          return context.parseAction(parent, source[this.name], this.forbiddenActionTypes, parent.isDesignMode());
        };
        ActionProperty2.prototype.toJSON = function(sender, target, value, context) {
          context.serializeValue(target, this.name, value ? value.toJSON(context) : void 0, void 0, true);
        };
        return ActionProperty2;
      }(serialization_1.PropertyDefinition)
    );
    exports.ActionProperty = ActionProperty;
    var BaseTextBlock = (
      /** @class */
      function(_super) {
        __extends(BaseTextBlock2, _super);
        function BaseTextBlock2(text) {
          var _this = _super.call(this) || this;
          _this.ariaHidden = false;
          if (text) {
            _this.text = text;
          }
          return _this;
        }
        BaseTextBlock2.prototype.populateSchema = function(schema) {
          _super.prototype.populateSchema.call(this, schema);
          schema.remove(BaseTextBlock2.selectActionProperty);
        };
        Object.defineProperty(BaseTextBlock2.prototype, "text", {
          get: function() {
            return this.getValue(BaseTextBlock2.textProperty);
          },
          set: function(value) {
            this.setText(value);
          },
          enumerable: false,
          configurable: true
        });
        BaseTextBlock2.prototype.getFontSize = function(fontType) {
          switch (this.effectiveSize) {
            case Enums.TextSize.Small:
              return fontType.fontSizes.small;
            case Enums.TextSize.Medium:
              return fontType.fontSizes.medium;
            case Enums.TextSize.Large:
              return fontType.fontSizes.large;
            case Enums.TextSize.ExtraLarge:
              return fontType.fontSizes.extraLarge;
            default:
              return fontType.fontSizes.default;
          }
        };
        BaseTextBlock2.prototype.getColorDefinition = function(colorSet, color) {
          switch (color) {
            case Enums.TextColor.Accent:
              return colorSet.accent;
            case Enums.TextColor.Dark:
              return colorSet.dark;
            case Enums.TextColor.Light:
              return colorSet.light;
            case Enums.TextColor.Good:
              return colorSet.good;
            case Enums.TextColor.Warning:
              return colorSet.warning;
            case Enums.TextColor.Attention:
              return colorSet.attention;
            default:
              return colorSet.default;
          }
        };
        BaseTextBlock2.prototype.setText = function(value) {
          this.setValue(BaseTextBlock2.textProperty, value);
        };
        BaseTextBlock2.prototype.init = function(textDefinition) {
          this.size = textDefinition.size;
          this.weight = textDefinition.weight;
          this.color = textDefinition.color;
          this.isSubtle = textDefinition.isSubtle;
        };
        BaseTextBlock2.prototype.asString = function() {
          return this.text;
        };
        BaseTextBlock2.prototype.applyStylesTo = function(targetElement) {
          var fontType = this.hostConfig.getFontTypeDefinition(this.effectiveFontType);
          if (fontType.fontFamily) {
            targetElement.style.fontFamily = fontType.fontFamily;
          }
          var fontSize;
          switch (this.effectiveSize) {
            case Enums.TextSize.Small:
              fontSize = fontType.fontSizes.small;
              break;
            case Enums.TextSize.Medium:
              fontSize = fontType.fontSizes.medium;
              break;
            case Enums.TextSize.Large:
              fontSize = fontType.fontSizes.large;
              break;
            case Enums.TextSize.ExtraLarge:
              fontSize = fontType.fontSizes.extraLarge;
              break;
            default:
              fontSize = fontType.fontSizes.default;
              break;
          }
          targetElement.style.fontSize = fontSize + "px";
          var colorDefinition = this.getColorDefinition(this.getEffectiveStyleDefinition().foregroundColors, this.effectiveColor);
          var targetColor = Utils.stringToCssColor(this.effectiveIsSubtle ? colorDefinition.subtle : colorDefinition.default);
          if (targetColor) {
            targetElement.style.color = targetColor;
          }
          var fontWeight;
          switch (this.effectiveWeight) {
            case Enums.TextWeight.Lighter:
              fontWeight = fontType.fontWeights.lighter;
              break;
            case Enums.TextWeight.Bolder:
              fontWeight = fontType.fontWeights.bolder;
              break;
            default:
              fontWeight = fontType.fontWeights.default;
              break;
          }
          targetElement.style.fontWeight = fontWeight.toString();
          if (this.ariaHidden) {
            targetElement.setAttribute("aria-hidden", "true");
          }
        };
        BaseTextBlock2.prototype.getAllActions = function() {
          var result = _super.prototype.getAllActions.call(this);
          if (this.selectAction) {
            result.push(this.selectAction);
          }
          return result;
        };
        Object.defineProperty(BaseTextBlock2.prototype, "effectiveColor", {
          get: function() {
            return this.color !== void 0 ? this.color : this.getEffectiveTextStyleDefinition().color;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(BaseTextBlock2.prototype, "effectiveFontType", {
          get: function() {
            return this.fontType !== void 0 ? this.fontType : this.getEffectiveTextStyleDefinition().fontType;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(BaseTextBlock2.prototype, "effectiveIsSubtle", {
          get: function() {
            return this.isSubtle !== void 0 ? this.isSubtle : this.getEffectiveTextStyleDefinition().isSubtle;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(BaseTextBlock2.prototype, "effectiveSize", {
          get: function() {
            return this.size !== void 0 ? this.size : this.getEffectiveTextStyleDefinition().size;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(BaseTextBlock2.prototype, "effectiveWeight", {
          get: function() {
            return this.weight !== void 0 ? this.weight : this.getEffectiveTextStyleDefinition().weight;
          },
          enumerable: false,
          configurable: true
        });
        BaseTextBlock2.textProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "text", true);
        BaseTextBlock2.sizeProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "size", Enums.TextSize);
        BaseTextBlock2.weightProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "weight", Enums.TextWeight);
        BaseTextBlock2.colorProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "color", Enums.TextColor);
        BaseTextBlock2.isSubtleProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_0, "isSubtle");
        BaseTextBlock2.fontTypeProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_2, "fontType", Enums.FontType);
        BaseTextBlock2.selectActionProperty = new ActionProperty(serialization_1.Versions.v1_1, "selectAction", [
          "Action.ShowCard"
        ]);
        __decorate([
          (0, serialization_1.property)(BaseTextBlock2.sizeProperty)
        ], BaseTextBlock2.prototype, "size", void 0);
        __decorate([
          (0, serialization_1.property)(BaseTextBlock2.weightProperty)
        ], BaseTextBlock2.prototype, "weight", void 0);
        __decorate([
          (0, serialization_1.property)(BaseTextBlock2.colorProperty)
        ], BaseTextBlock2.prototype, "color", void 0);
        __decorate([
          (0, serialization_1.property)(BaseTextBlock2.fontTypeProperty)
        ], BaseTextBlock2.prototype, "fontType", void 0);
        __decorate([
          (0, serialization_1.property)(BaseTextBlock2.isSubtleProperty)
        ], BaseTextBlock2.prototype, "isSubtle", void 0);
        __decorate([
          (0, serialization_1.property)(BaseTextBlock2.textProperty)
        ], BaseTextBlock2.prototype, "text", null);
        __decorate([
          (0, serialization_1.property)(BaseTextBlock2.selectActionProperty)
        ], BaseTextBlock2.prototype, "selectAction", void 0);
        return BaseTextBlock2;
      }(CardElement)
    );
    exports.BaseTextBlock = BaseTextBlock;
    var TextBlock = (
      /** @class */
      function(_super) {
        __extends(TextBlock2, _super);
        function TextBlock2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.wrap = false;
          _this._treatAsPlainText = true;
          _this.useMarkdown = true;
          return _this;
        }
        TextBlock2.prototype.restoreOriginalContent = function() {
          var _a2, _b2;
          if (this.renderedElement !== void 0) {
            if (this.maxLines && this.maxLines > 0) {
              this.renderedElement.style.maxHeight = this._computedLineHeight * this.maxLines + "px";
            }
            var originalHtml = (_b2 = (_a2 = TextBlock2._ttRoundtripPolicy) === null || _a2 === void 0 ? void 0 : _a2.createHTML(this._originalInnerHtml)) !== null && _b2 !== void 0 ? _b2 : this._originalInnerHtml;
            this.renderedElement.innerHTML = originalHtml;
          }
        };
        TextBlock2.prototype.truncateIfSupported = function(maxHeight) {
          if (this.renderedElement !== void 0) {
            var children = this.renderedElement.children;
            var isTextOnly = !children.length;
            var truncationSupported = isTextOnly || children.length === 1 && children[0].tagName.toLowerCase() === "p" && !children[0].children.length;
            if (truncationSupported) {
              var element = isTextOnly ? this.renderedElement : children[0];
              Utils.truncateText(element, maxHeight, this._computedLineHeight);
              return true;
            }
          }
          return false;
        };
        TextBlock2.prototype.setText = function(value) {
          _super.prototype.setText.call(this, value);
          this._processedText = void 0;
        };
        TextBlock2.prototype.internalRender = function() {
          var _this = this;
          var _a2, _b2;
          this._processedText = void 0;
          if (this.text) {
            var preProcessedText = this.preProcessPropertyValue(BaseTextBlock.textProperty);
            var hostConfig = this.hostConfig;
            var element = void 0;
            if (this.forElementId) {
              var labelElement = document.createElement("label");
              labelElement.htmlFor = this.forElementId;
              element = labelElement;
            } else {
              element = document.createElement("div");
            }
            element.classList.add(hostConfig.makeCssClassName("ac-textBlock"));
            element.style.overflow = "hidden";
            this.applyStylesTo(element);
            if (this.style === "heading") {
              element.setAttribute("role", "heading");
              var headingLevel = this.hostConfig.textBlock.headingLevel;
              if (headingLevel !== void 0 && headingLevel > 0) {
                element.setAttribute("aria-level", headingLevel.toString());
              }
            }
            if (this.selectAction && hostConfig.supportsInteractivity) {
              element.onclick = function(e) {
                if (_this.selectAction && _this.selectAction.isEffectivelyEnabled()) {
                  e.preventDefault();
                  e.cancelBubble = true;
                  _this.selectAction.execute();
                }
              };
              this.selectAction.setupElementForAccessibility(element);
              if (this.selectAction.isEffectivelyEnabled()) {
                element.classList.add(hostConfig.makeCssClassName("ac-selectable"));
              }
            }
            if (!this._processedText) {
              this._treatAsPlainText = true;
              var formattedText = TextFormatters.formatText(this.lang, preProcessedText);
              if (this.useMarkdown && formattedText) {
                if (shared_1.GlobalSettings.allowMarkForTextHighlighting) {
                  formattedText = formattedText.replace(/<mark>/g, "===").replace(/<\/mark>/g, "/==/");
                }
                var markdownProcessingResult = AdaptiveCard.applyMarkdown(formattedText);
                if (markdownProcessingResult.didProcess && markdownProcessingResult.outputHtml) {
                  this._processedText = markdownProcessingResult.outputHtml;
                  this._treatAsPlainText = false;
                  if (shared_1.GlobalSettings.allowMarkForTextHighlighting && this._processedText) {
                    var markStyle = "";
                    var effectiveStyle = this.getEffectiveStyleDefinition();
                    if (effectiveStyle.highlightBackgroundColor) {
                      markStyle += "background-color: " + effectiveStyle.highlightBackgroundColor + ";";
                    }
                    if (effectiveStyle.highlightForegroundColor) {
                      markStyle += "color: " + effectiveStyle.highlightForegroundColor + ";";
                    }
                    if (markStyle) {
                      markStyle = 'style="' + markStyle + '"';
                    }
                    this._processedText = this._processedText.replace(/===/g, "<mark " + markStyle + ">").replace(/\/==\//g, "</mark>");
                  }
                } else {
                  this._processedText = formattedText;
                  this._treatAsPlainText = true;
                }
              } else {
                this._processedText = formattedText;
                this._treatAsPlainText = true;
              }
            }
            if (!this._processedText) {
              this._processedText = "";
            }
            if (this._treatAsPlainText) {
              element.innerText = this._processedText;
            } else {
              var processedHtml = (_b2 = (_a2 = TextBlock2._ttMarkdownPolicy) === null || _a2 === void 0 ? void 0 : _a2.createHTML(this._processedText)) !== null && _b2 !== void 0 ? _b2 : this._processedText;
              element.innerHTML = processedHtml;
            }
            if (element.firstElementChild instanceof HTMLElement) {
              var firstElementChild = element.firstElementChild;
              firstElementChild.style.marginTop = "0px";
              firstElementChild.style.width = "100%";
              if (!this.wrap) {
                firstElementChild.style.overflow = "hidden";
                firstElementChild.style.textOverflow = "ellipsis";
              }
            }
            if (element.lastElementChild instanceof HTMLElement) {
              element.lastElementChild.style.marginBottom = "0px";
            }
            var anchors = element.getElementsByTagName("a");
            var _loop_1 = function(anchor2) {
              anchor2.classList.add(hostConfig.makeCssClassName("ac-anchor"));
              anchor2.target = "_blank";
              anchor2.onclick = function(e) {
                if (raiseAnchorClickedEvent(_this, anchor2, e)) {
                  e.preventDefault();
                  e.cancelBubble = true;
                }
              };
              anchor2.oncontextmenu = function(e) {
                if (raiseAnchorClickedEvent(_this, anchor2, e)) {
                  e.preventDefault();
                  e.cancelBubble = true;
                  return false;
                }
                return true;
              };
            };
            for (var _i = 0, _c = Array.from(anchors); _i < _c.length; _i++) {
              var anchor = _c[_i];
              _loop_1(anchor);
            }
            if (this.wrap) {
              element.style.wordWrap = "break-word";
              if (this.maxLines && this.maxLines > 0) {
                element.style.overflow = "hidden";
                if (Utils.isInternetExplorer() || !shared_1.GlobalSettings.useWebkitLineClamp) {
                  element.style.maxHeight = this._computedLineHeight * this.maxLines + "px";
                } else {
                  element.style.removeProperty("line-height");
                  element.style.display = "-webkit-box";
                  element.style.webkitBoxOrient = "vertical";
                  element.style.webkitLineClamp = this.maxLines.toString();
                }
              }
            } else {
              element.style.whiteSpace = "nowrap";
              element.style.textOverflow = "ellipsis";
            }
            if (shared_1.GlobalSettings.useAdvancedTextBlockTruncation || shared_1.GlobalSettings.useAdvancedCardBottomTruncation) {
              this._originalInnerHtml = element.innerHTML;
            }
            return element;
          } else {
            return void 0;
          }
        };
        TextBlock2.prototype.truncateOverflow = function(maxHeight) {
          if (maxHeight >= this._computedLineHeight) {
            return this.truncateIfSupported(maxHeight);
          }
          return false;
        };
        TextBlock2.prototype.undoOverflowTruncation = function() {
          this.restoreOriginalContent();
          if (shared_1.GlobalSettings.useAdvancedTextBlockTruncation && this.maxLines) {
            var maxHeight = this._computedLineHeight * this.maxLines;
            this.truncateIfSupported(maxHeight);
          }
        };
        TextBlock2.prototype.applyStylesTo = function(targetElement) {
          _super.prototype.applyStylesTo.call(this, targetElement);
          switch (this.getEffectiveHorizontalAlignment()) {
            case Enums.HorizontalAlignment.Center:
              targetElement.style.textAlign = "center";
              break;
            case Enums.HorizontalAlignment.Right:
              targetElement.style.textAlign = "end";
              break;
            default:
              targetElement.style.textAlign = "start";
              break;
          }
          var lineHeights = this.hostConfig.lineHeights;
          if (lineHeights) {
            switch (this.effectiveSize) {
              case Enums.TextSize.Small:
                this._computedLineHeight = lineHeights.small;
                break;
              case Enums.TextSize.Medium:
                this._computedLineHeight = lineHeights.medium;
                break;
              case Enums.TextSize.Large:
                this._computedLineHeight = lineHeights.large;
                break;
              case Enums.TextSize.ExtraLarge:
                this._computedLineHeight = lineHeights.extraLarge;
                break;
              default:
                this._computedLineHeight = lineHeights.default;
                break;
            }
          } else {
            this._computedLineHeight = this.getFontSize(this.hostConfig.getFontTypeDefinition(this.effectiveFontType)) * 1.33;
          }
          targetElement.style.lineHeight = this._computedLineHeight + "px";
        };
        TextBlock2.prototype.getJsonTypeName = function() {
          return "TextBlock";
        };
        TextBlock2.prototype.getEffectiveTextStyleDefinition = function() {
          if (this.style) {
            return this.hostConfig.textStyles.getStyleByName(this.style);
          }
          return _super.prototype.getEffectiveTextStyleDefinition.call(this);
        };
        TextBlock2.prototype.updateLayout = function(processChildren) {
          if (processChildren === void 0) {
            processChildren = false;
          }
          _super.prototype.updateLayout.call(this, processChildren);
          if (shared_1.GlobalSettings.useAdvancedTextBlockTruncation && this.maxLines && this.isDisplayed()) {
            this.restoreOriginalContent();
            this.truncateIfSupported(this._computedLineHeight * this.maxLines);
          }
        };
        var _a, _b;
        TextBlock2.wrapProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_0, "wrap", false);
        TextBlock2.maxLinesProperty = new serialization_1.NumProperty(serialization_1.Versions.v1_0, "maxLines");
        TextBlock2.styleProperty = new serialization_1.ValueSetProperty(serialization_1.Versions.v1_5, "style", [
          { value: "default" },
          { value: "columnHeader" },
          { value: "heading" }
        ]);
        TextBlock2._ttMarkdownPolicy = typeof window === "undefined" ? void 0 : (_a = window.trustedTypes) === null || _a === void 0 ? void 0 : _a.createPolicy("adaptivecards#markdownPassthroughPolicy", { createHTML: function(value) {
          return value;
        } });
        TextBlock2._ttRoundtripPolicy = typeof window === "undefined" ? void 0 : (_b = window.trustedTypes) === null || _b === void 0 ? void 0 : _b.createPolicy("adaptivecards#restoreContentsPolicy", { createHTML: function(value) {
          return value;
        } });
        __decorate([
          (0, serialization_1.property)(TextBlock2.wrapProperty)
        ], TextBlock2.prototype, "wrap", void 0);
        __decorate([
          (0, serialization_1.property)(TextBlock2.maxLinesProperty)
        ], TextBlock2.prototype, "maxLines", void 0);
        __decorate([
          (0, serialization_1.property)(TextBlock2.styleProperty)
        ], TextBlock2.prototype, "style", void 0);
        return TextBlock2;
      }(BaseTextBlock)
    );
    exports.TextBlock = TextBlock;
    var TextRun = (
      /** @class */
      function(_super) {
        __extends(TextRun2, _super);
        function TextRun2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.italic = false;
          _this.strikethrough = false;
          _this.highlight = false;
          _this.underline = false;
          return _this;
        }
        TextRun2.prototype.populateSchema = function(schema) {
          _super.prototype.populateSchema.call(this, schema);
          schema.add(BaseTextBlock.selectActionProperty);
        };
        TextRun2.prototype.internalRender = function() {
          var _this = this;
          if (this.text) {
            var preProcessedText = this.preProcessPropertyValue(BaseTextBlock.textProperty);
            var hostConfig = this.hostConfig;
            var formattedText = TextFormatters.formatText(this.lang, preProcessedText);
            if (!formattedText) {
              formattedText = "";
            }
            var element = document.createElement("span");
            element.classList.add(hostConfig.makeCssClassName("ac-textRun"));
            this.applyStylesTo(element);
            if (this.selectAction && hostConfig.supportsInteractivity) {
              var anchor = document.createElement("a");
              anchor.classList.add(hostConfig.makeCssClassName("ac-anchor"));
              var href = this.selectAction.getHref();
              anchor.href = href ? href : "";
              anchor.target = "_blank";
              anchor.onclick = function(e) {
                if (_this.selectAction && _this.selectAction.isEffectivelyEnabled()) {
                  e.preventDefault();
                  e.cancelBubble = true;
                  _this.selectAction.execute();
                }
              };
              this.selectAction.setupElementForAccessibility(anchor);
              anchor.innerText = formattedText;
              element.appendChild(anchor);
            } else {
              element.innerText = formattedText;
            }
            return element;
          } else {
            return void 0;
          }
        };
        TextRun2.prototype.applyStylesTo = function(targetElement) {
          _super.prototype.applyStylesTo.call(this, targetElement);
          if (this.italic) {
            targetElement.style.fontStyle = "italic";
          }
          if (this.strikethrough) {
            targetElement.style.textDecoration = "line-through";
          }
          if (this.highlight) {
            var colorDefinition = this.getColorDefinition(this.getEffectiveStyleDefinition().foregroundColors, this.effectiveColor);
            var backgroundColor = Utils.stringToCssColor(this.effectiveIsSubtle ? colorDefinition.highlightColors.subtle : colorDefinition.highlightColors.default);
            if (backgroundColor) {
              targetElement.style.backgroundColor = backgroundColor;
            }
          }
          if (this.underline) {
            targetElement.style.textDecoration = "underline";
          }
        };
        TextRun2.prototype.getJsonTypeName = function() {
          return "TextRun";
        };
        Object.defineProperty(TextRun2.prototype, "isStandalone", {
          get: function() {
            return false;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(TextRun2.prototype, "isInline", {
          get: function() {
            return true;
          },
          enumerable: false,
          configurable: true
        });
        TextRun2.italicProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_2, "italic", false);
        TextRun2.strikethroughProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_2, "strikethrough", false);
        TextRun2.highlightProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_2, "highlight", false);
        TextRun2.underlineProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_3, "underline", false);
        __decorate([
          (0, serialization_1.property)(TextRun2.italicProperty)
        ], TextRun2.prototype, "italic", void 0);
        __decorate([
          (0, serialization_1.property)(TextRun2.strikethroughProperty)
        ], TextRun2.prototype, "strikethrough", void 0);
        __decorate([
          (0, serialization_1.property)(TextRun2.highlightProperty)
        ], TextRun2.prototype, "highlight", void 0);
        __decorate([
          (0, serialization_1.property)(TextRun2.underlineProperty)
        ], TextRun2.prototype, "underline", void 0);
        return TextRun2;
      }(BaseTextBlock)
    );
    exports.TextRun = TextRun;
    var RichTextBlock = (
      /** @class */
      function(_super) {
        __extends(RichTextBlock2, _super);
        function RichTextBlock2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this._inlines = [];
          return _this;
        }
        RichTextBlock2.prototype.internalAddInline = function(inline, forceAdd) {
          if (forceAdd === void 0) {
            forceAdd = false;
          }
          if (!inline.isInline) {
            throw new Error(strings_1.Strings.errors.elementCannotBeUsedAsInline());
          }
          var doAdd = inline.parent === void 0 || forceAdd;
          if (!doAdd && inline.parent !== this) {
            throw new Error(strings_1.Strings.errors.inlineAlreadyParented());
          } else {
            inline.setParent(this);
            this._inlines.push(inline);
          }
        };
        RichTextBlock2.prototype.internalParse = function(source, context) {
          _super.prototype.internalParse.call(this, source, context);
          this._inlines = [];
          if (Array.isArray(source["inlines"])) {
            for (var _i = 0, _a = source["inlines"]; _i < _a.length; _i++) {
              var jsonInline = _a[_i];
              var inline = void 0;
              if (typeof jsonInline === "string") {
                var textRun = new TextRun();
                textRun.text = jsonInline;
                inline = textRun;
              } else {
                inline = context.parseElement(this, jsonInline, [], false);
              }
              if (inline) {
                this.internalAddInline(inline, true);
              }
            }
          }
        };
        RichTextBlock2.prototype.internalToJSON = function(target, context) {
          _super.prototype.internalToJSON.call(this, target, context);
          if (this._inlines.length > 0) {
            var jsonInlines = [];
            for (var _i = 0, _a = this._inlines; _i < _a.length; _i++) {
              var inline = _a[_i];
              jsonInlines.push(inline.toJSON(context));
            }
            context.serializeValue(target, "inlines", jsonInlines);
          }
        };
        RichTextBlock2.prototype.internalRender = function() {
          if (this._inlines.length > 0) {
            var element = void 0;
            if (this.forElementId) {
              var labelElement = document.createElement("label");
              labelElement.htmlFor = this.forElementId;
              element = labelElement;
            } else {
              element = document.createElement("div");
            }
            element.className = this.hostConfig.makeCssClassName("ac-richTextBlock");
            switch (this.getEffectiveHorizontalAlignment()) {
              case Enums.HorizontalAlignment.Center:
                element.style.textAlign = "center";
                break;
              case Enums.HorizontalAlignment.Right:
                element.style.textAlign = "end";
                break;
              default:
                element.style.textAlign = "start";
                break;
            }
            var renderedInlines = 0;
            for (var _i = 0, _a = this._inlines; _i < _a.length; _i++) {
              var inline = _a[_i];
              var renderedInline = inline.render();
              if (renderedInline) {
                element.appendChild(renderedInline);
                renderedInlines++;
              }
            }
            if (renderedInlines > 0) {
              return element;
            }
          }
          return void 0;
        };
        RichTextBlock2.prototype.asString = function() {
          var result = "";
          for (var _i = 0, _a = this._inlines; _i < _a.length; _i++) {
            var inline = _a[_i];
            result += inline.asString();
          }
          return result;
        };
        RichTextBlock2.prototype.getJsonTypeName = function() {
          return "RichTextBlock";
        };
        RichTextBlock2.prototype.getInlineCount = function() {
          return this._inlines.length;
        };
        RichTextBlock2.prototype.getInlineAt = function(index) {
          if (index >= 0 && index < this._inlines.length) {
            return this._inlines[index];
          } else {
            throw new Error(strings_1.Strings.errors.indexOutOfRange(index));
          }
        };
        RichTextBlock2.prototype.addInline = function(inline) {
          if (typeof inline === "string") {
            this.internalAddInline(new TextRun(inline));
          } else {
            this.internalAddInline(inline);
          }
        };
        RichTextBlock2.prototype.removeInline = function(inline) {
          var index = this._inlines.indexOf(inline);
          if (index >= 0) {
            this._inlines[index].setParent(void 0);
            this._inlines.splice(index, 1);
            return true;
          }
          return false;
        };
        return RichTextBlock2;
      }(CardElement)
    );
    exports.RichTextBlock = RichTextBlock;
    var Fact = (
      /** @class */
      function(_super) {
        __extends(Fact2, _super);
        function Fact2(name, value) {
          var _this = _super.call(this) || this;
          _this.name = name;
          _this.value = value;
          return _this;
        }
        Fact2.prototype.getSchemaKey = function() {
          return "Fact";
        };
        Fact2.titleProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "title");
        Fact2.valueProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "value");
        __decorate([
          (0, serialization_1.property)(Fact2.titleProperty)
        ], Fact2.prototype, "name", void 0);
        __decorate([
          (0, serialization_1.property)(Fact2.valueProperty)
        ], Fact2.prototype, "value", void 0);
        return Fact2;
      }(serialization_1.SerializableObject)
    );
    exports.Fact = Fact;
    var FactSet = (
      /** @class */
      function(_super) {
        __extends(FactSet2, _super);
        function FactSet2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(FactSet2.prototype, "useDefaultSizing", {
          //#endregion
          get: function() {
            return false;
          },
          enumerable: false,
          configurable: true
        });
        FactSet2.prototype.internalRender = function() {
          var element = void 0;
          var hostConfig = this.hostConfig;
          if (this.facts.length > 0) {
            element = document.createElement("table");
            element.style.borderWidth = "0px";
            element.style.borderSpacing = "0px";
            element.style.borderStyle = "none";
            element.style.borderCollapse = "collapse";
            element.style.display = "block";
            element.style.overflow = "hidden";
            element.classList.add(hostConfig.makeCssClassName("ac-factset"));
            element.setAttribute("role", "presentation");
            for (var i = 0; i < this.facts.length; i++) {
              var trElement = document.createElement("tr");
              if (i > 0) {
                trElement.style.marginTop = hostConfig.factSet.spacing + "px";
              }
              var tdElement = document.createElement("td");
              tdElement.style.padding = "0";
              tdElement.classList.add(hostConfig.makeCssClassName("ac-fact-title"));
              if (hostConfig.factSet.title.maxWidth) {
                tdElement.style.maxWidth = hostConfig.factSet.title.maxWidth + "px";
              }
              tdElement.style.verticalAlign = "top";
              var textBlock = new TextBlock();
              textBlock.setParent(this);
              textBlock.text = !this.facts[i].name && this.isDesignMode() ? "Title" : this.facts[i].name;
              textBlock.size = hostConfig.factSet.title.size;
              textBlock.color = hostConfig.factSet.title.color;
              textBlock.isSubtle = hostConfig.factSet.title.isSubtle;
              textBlock.weight = hostConfig.factSet.title.weight;
              textBlock.wrap = hostConfig.factSet.title.wrap;
              textBlock.spacing = Enums.Spacing.None;
              Utils.appendChild(tdElement, textBlock.render());
              Utils.appendChild(trElement, tdElement);
              tdElement = document.createElement("td");
              tdElement.style.width = "10px";
              Utils.appendChild(trElement, tdElement);
              tdElement = document.createElement("td");
              tdElement.style.padding = "0";
              tdElement.style.verticalAlign = "top";
              tdElement.classList.add(hostConfig.makeCssClassName("ac-fact-value"));
              textBlock = new TextBlock();
              textBlock.setParent(this);
              textBlock.text = this.facts[i].value;
              textBlock.size = hostConfig.factSet.value.size;
              textBlock.color = hostConfig.factSet.value.color;
              textBlock.isSubtle = hostConfig.factSet.value.isSubtle;
              textBlock.weight = hostConfig.factSet.value.weight;
              textBlock.wrap = hostConfig.factSet.value.wrap;
              textBlock.spacing = Enums.Spacing.None;
              Utils.appendChild(tdElement, textBlock.render());
              Utils.appendChild(trElement, tdElement);
              Utils.appendChild(element, trElement);
            }
          }
          return element;
        };
        FactSet2.prototype.getJsonTypeName = function() {
          return "FactSet";
        };
        FactSet2.factsProperty = new serialization_1.SerializableObjectCollectionProperty(serialization_1.Versions.v1_0, "facts", Fact);
        __decorate([
          (0, serialization_1.property)(FactSet2.factsProperty)
        ], FactSet2.prototype, "facts", void 0);
        return FactSet2;
      }(CardElement)
    );
    exports.FactSet = FactSet;
    var ImageDimensionProperty = (
      /** @class */
      function(_super) {
        __extends(ImageDimensionProperty2, _super);
        function ImageDimensionProperty2(targetVersion, name, internalName, fallbackProperty) {
          var _this = _super.call(this, targetVersion, name) || this;
          _this.targetVersion = targetVersion;
          _this.name = name;
          _this.internalName = internalName;
          _this.fallbackProperty = fallbackProperty;
          return _this;
        }
        ImageDimensionProperty2.prototype.getInternalName = function() {
          return this.internalName;
        };
        ImageDimensionProperty2.prototype.parse = function(sender, source, context) {
          var result = void 0;
          var sourceValue = source[this.name];
          if (sourceValue === void 0) {
            return this.defaultValue;
          }
          var isValid = false;
          if (typeof sourceValue === "string") {
            try {
              var size = shared_1.SizeAndUnit.parse(sourceValue, true);
              if (size.unit === Enums.SizeUnit.Pixel) {
                result = size.physicalSize;
                isValid = true;
              }
            } catch (_a) {
            }
            if (!isValid && this.fallbackProperty) {
              isValid = this.fallbackProperty.isValidValue(sourceValue, context);
            }
          }
          if (!isValid) {
            context.logParseEvent(sender, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.invalidPropertyValue(sourceValue, this.name));
          }
          return result;
        };
        ImageDimensionProperty2.prototype.toJSON = function(sender, target, value, context) {
          context.serializeValue(target, this.name, typeof value === "number" && !isNaN(value) ? value + "px" : void 0);
        };
        return ImageDimensionProperty2;
      }(serialization_1.PropertyDefinition)
    );
    var Image = (
      /** @class */
      function(_super) {
        __extends(Image2, _super);
        function Image2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.size = Enums.Size.Auto;
          _this.style = Enums.ImageStyle.Default;
          return _this;
        }
        Image2.prototype.populateSchema = function(schema) {
          _super.prototype.populateSchema.call(this, schema);
          schema.remove(CardElement.heightProperty);
        };
        Image2.prototype.applySize = function(element) {
          if (this.pixelWidth || this.pixelHeight) {
            if (this.pixelWidth) {
              element.style.width = this.pixelWidth + "px";
            }
            if (this.pixelHeight) {
              element.style.height = this.pixelHeight + "px";
            }
          } else {
            if (this.maxHeight) {
              switch (this.size) {
                case Enums.Size.Small:
                  element.style.height = this.hostConfig.imageSizes.small + "px";
                  break;
                case Enums.Size.Large:
                  element.style.height = this.hostConfig.imageSizes.large + "px";
                  break;
                default:
                  element.style.height = this.hostConfig.imageSizes.medium + "px";
                  break;
              }
              element.style.maxHeight = this.maxHeight + "px";
            } else {
              switch (this.size) {
                case Enums.Size.Stretch:
                  element.style.width = "100%";
                  break;
                case Enums.Size.Auto:
                  element.style.maxWidth = "100%";
                  break;
                case Enums.Size.Small:
                  element.style.width = this.hostConfig.imageSizes.small + "px";
                  break;
                case Enums.Size.Large:
                  element.style.width = this.hostConfig.imageSizes.large + "px";
                  break;
                case Enums.Size.Medium:
                  element.style.width = this.hostConfig.imageSizes.medium + "px";
                  break;
              }
              element.style.maxHeight = "100%";
            }
          }
        };
        Object.defineProperty(Image2.prototype, "useDefaultSizing", {
          get: function() {
            return false;
          },
          enumerable: false,
          configurable: true
        });
        Image2.prototype.internalRender = function() {
          var _this = this;
          var element = void 0;
          if (this.url) {
            element = document.createElement("div");
            element.style.display = "flex";
            element.style.alignItems = "flex-start";
            var hostConfig = this.hostConfig;
            switch (this.getEffectiveHorizontalAlignment()) {
              case Enums.HorizontalAlignment.Center:
                element.style.justifyContent = "center";
                break;
              case Enums.HorizontalAlignment.Right:
                element.style.justifyContent = "flex-end";
                break;
              default:
                element.style.justifyContent = "flex-start";
                break;
            }
            var imageElement = document.createElement("img");
            imageElement.onload = function(_e) {
              raiseImageLoadedEvent(_this);
            };
            imageElement.onerror = function(_e) {
              if (_this.renderedElement) {
                var card = _this.getRootElement();
                _this.renderedElement;
                if (card && card.designMode) {
                  var errorElement = document.createElement("div");
                  errorElement.style.display = "flex";
                  errorElement.style.alignItems = "center";
                  errorElement.style.justifyContent = "center";
                  errorElement.style.backgroundColor = "#EEEEEE";
                  errorElement.style.color = "black";
                  errorElement.innerText = ":-(";
                  errorElement.style.padding = "10px";
                  _this.applySize(errorElement);
                  _this.renderedElement.appendChild(errorElement);
                }
              }
              raiseImageLoadedEvent(_this);
            };
            imageElement.style.minWidth = "0";
            imageElement.classList.add(hostConfig.makeCssClassName("ac-image"));
            if (this.selectAction && hostConfig.supportsInteractivity) {
              imageElement.onkeypress = function(e) {
                if (_this.selectAction && _this.selectAction.isEffectivelyEnabled() && (e.code === "Enter" || e.code === "Space")) {
                  e.preventDefault();
                  e.cancelBubble = true;
                  _this.selectAction.execute();
                }
              };
              imageElement.onclick = function(e) {
                if (_this.selectAction && _this.selectAction.isEffectivelyEnabled()) {
                  e.preventDefault();
                  e.cancelBubble = true;
                  _this.selectAction.execute();
                }
              };
              this.selectAction.setupElementForAccessibility(imageElement);
              if (this.selectAction.isEffectivelyEnabled()) {
                imageElement.classList.add(hostConfig.makeCssClassName("ac-selectable"));
              }
            }
            this.applySize(imageElement);
            if (this.style === Enums.ImageStyle.Person) {
              imageElement.style.borderRadius = "50%";
              imageElement.style.backgroundPosition = "50% 50%";
              imageElement.style.backgroundRepeat = "no-repeat";
            }
            var backgroundColor = Utils.stringToCssColor(this.backgroundColor);
            if (backgroundColor) {
              imageElement.style.backgroundColor = backgroundColor;
            }
            imageElement.src = this.preProcessPropertyValue(Image2.urlProperty);
            var altTextProperty = this.preProcessPropertyValue(Image2.altTextProperty);
            if (altTextProperty) {
              imageElement.alt = altTextProperty;
            }
            element.appendChild(imageElement);
          }
          return element;
        };
        Image2.prototype.getJsonTypeName = function() {
          return "Image";
        };
        Image2.prototype.getAllActions = function() {
          var result = _super.prototype.getAllActions.call(this);
          if (this.selectAction) {
            result.push(this.selectAction);
          }
          return result;
        };
        Image2.prototype.getActionById = function(id) {
          var result = _super.prototype.getActionById.call(this, id);
          if (!result && this.selectAction) {
            result = this.selectAction.getActionById(id);
          }
          return result;
        };
        Image2.prototype.getResourceInformation = function() {
          return this.url ? [{ url: this.url, mimeType: "image" }] : [];
        };
        Image2.urlProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "url");
        Image2.altTextProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "altText");
        Image2.backgroundColorProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_1, "backgroundColor");
        Image2.styleProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "style", Enums.ImageStyle, Enums.ImageStyle.Default);
        Image2.sizeProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "size", Enums.Size, Enums.Size.Auto);
        Image2.pixelWidthProperty = new ImageDimensionProperty(serialization_1.Versions.v1_1, "width", "pixelWidth");
        Image2.pixelHeightProperty = new ImageDimensionProperty(serialization_1.Versions.v1_1, "height", "pixelHeight", CardElement.heightProperty);
        Image2.selectActionProperty = new ActionProperty(serialization_1.Versions.v1_1, "selectAction", [
          "Action.ShowCard"
        ]);
        __decorate([
          (0, serialization_1.property)(Image2.urlProperty)
        ], Image2.prototype, "url", void 0);
        __decorate([
          (0, serialization_1.property)(Image2.altTextProperty)
        ], Image2.prototype, "altText", void 0);
        __decorate([
          (0, serialization_1.property)(Image2.backgroundColorProperty)
        ], Image2.prototype, "backgroundColor", void 0);
        __decorate([
          (0, serialization_1.property)(Image2.sizeProperty)
        ], Image2.prototype, "size", void 0);
        __decorate([
          (0, serialization_1.property)(Image2.styleProperty)
        ], Image2.prototype, "style", void 0);
        __decorate([
          (0, serialization_1.property)(Image2.pixelWidthProperty)
        ], Image2.prototype, "pixelWidth", void 0);
        __decorate([
          (0, serialization_1.property)(Image2.pixelHeightProperty)
        ], Image2.prototype, "pixelHeight", void 0);
        __decorate([
          (0, serialization_1.property)(Image2.selectActionProperty)
        ], Image2.prototype, "selectAction", void 0);
        return Image2;
      }(CardElement)
    );
    exports.Image = Image;
    var CardElementContainer = (
      /** @class */
      function(_super) {
        __extends(CardElementContainer2, _super);
        function CardElementContainer2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.allowVerticalOverflow = false;
          return _this;
        }
        CardElementContainer2.prototype.populateSchema = function(schema) {
          _super.prototype.populateSchema.call(this, schema);
          if (!this.isSelectable) {
            schema.remove(CardElementContainer2.selectActionProperty);
          }
        };
        CardElementContainer2.prototype.isElementAllowed = function(element) {
          return this.hostConfig.supportsInteractivity || !element.isInteractive;
        };
        CardElementContainer2.prototype.applyPadding = function() {
          _super.prototype.applyPadding.call(this);
          if (!this.renderedElement) {
            return;
          }
          var physicalPadding = new shared_1.SpacingDefinition();
          if (this.getEffectivePadding()) {
            physicalPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(this.getEffectivePadding());
          }
          this.renderedElement.style.paddingTop = physicalPadding.top + "px";
          this.renderedElement.style.paddingRight = physicalPadding.right + "px";
          this.renderedElement.style.paddingBottom = physicalPadding.bottom + "px";
          this.renderedElement.style.paddingLeft = physicalPadding.left + "px";
          this.renderedElement.style.marginRight = "0";
          this.renderedElement.style.marginLeft = "0";
        };
        Object.defineProperty(CardElementContainer2.prototype, "isSelectable", {
          get: function() {
            return false;
          },
          enumerable: false,
          configurable: true
        });
        CardElementContainer2.prototype.forbiddenChildElements = function() {
          return [];
        };
        CardElementContainer2.prototype.releaseDOMResources = function() {
          _super.prototype.releaseDOMResources.call(this);
          for (var i = 0; i < this.getItemCount(); i++) {
            this.getItemAt(i).releaseDOMResources();
          }
        };
        CardElementContainer2.prototype.internalValidateProperties = function(context) {
          _super.prototype.internalValidateProperties.call(this, context);
          for (var i = 0; i < this.getItemCount(); i++) {
            var item = this.getItemAt(i);
            if (!this.hostConfig.supportsInteractivity && item.isInteractive) {
              context.addFailure(this, Enums.ValidationEvent.InteractivityNotAllowed, strings_1.Strings.errors.interactivityNotAllowed());
            }
            if (!this.isElementAllowed(item)) {
              context.addFailure(this, Enums.ValidationEvent.InteractivityNotAllowed, strings_1.Strings.errors.elementTypeNotAllowed(item.getJsonTypeName()));
            }
            item.internalValidateProperties(context);
          }
          if (this._selectAction) {
            this._selectAction.internalValidateProperties(context);
          }
        };
        CardElementContainer2.prototype.render = function() {
          var _this = this;
          var element = _super.prototype.render.call(this);
          if (element) {
            var hostConfig = this.hostConfig;
            if (this.allowVerticalOverflow) {
              element.style.overflowX = "hidden";
              element.style.overflowY = "auto";
            }
            if (element && this.isSelectable && this._selectAction && hostConfig.supportsInteractivity) {
              element.onclick = function(e) {
                if (_this._selectAction && _this._selectAction.isEffectivelyEnabled()) {
                  e.preventDefault();
                  e.cancelBubble = true;
                  _this._selectAction.execute();
                }
              };
              element.onkeypress = function(e) {
                if (_this._selectAction && _this._selectAction.isEffectivelyEnabled() && (e.code === "Enter" || e.code === "Space")) {
                  e.preventDefault();
                  e.cancelBubble = true;
                  _this._selectAction.execute();
                }
              };
              this._selectAction.setupElementForAccessibility(element);
              if (this._selectAction.isEffectivelyEnabled()) {
                element.classList.add(hostConfig.makeCssClassName("ac-selectable"));
              }
            }
          }
          return element;
        };
        CardElementContainer2.prototype.updateLayout = function(processChildren) {
          if (processChildren === void 0) {
            processChildren = true;
          }
          _super.prototype.updateLayout.call(this, processChildren);
          if (processChildren) {
            for (var i = 0; i < this.getItemCount(); i++) {
              this.getItemAt(i).updateLayout();
            }
          }
        };
        CardElementContainer2.prototype.getAllInputs = function(processActions) {
          if (processActions === void 0) {
            processActions = true;
          }
          var result = [];
          for (var i = 0; i < this.getItemCount(); i++) {
            result.push.apply(result, this.getItemAt(i).getAllInputs(processActions));
          }
          return result;
        };
        CardElementContainer2.prototype.getAllActions = function() {
          var result = _super.prototype.getAllActions.call(this);
          for (var i = 0; i < this.getItemCount(); i++) {
            result.push.apply(result, this.getItemAt(i).getAllActions());
          }
          if (this._selectAction) {
            result.push(this._selectAction);
          }
          return result;
        };
        CardElementContainer2.prototype.getResourceInformation = function() {
          var result = [];
          for (var i = 0; i < this.getItemCount(); i++) {
            result.push.apply(result, this.getItemAt(i).getResourceInformation());
          }
          return result;
        };
        CardElementContainer2.prototype.getElementById = function(id) {
          var result = _super.prototype.getElementById.call(this, id);
          if (!result) {
            for (var i = 0; i < this.getItemCount(); i++) {
              result = this.getItemAt(i).getElementById(id);
              if (result) {
                break;
              }
            }
          }
          return result;
        };
        CardElementContainer2.prototype.findDOMNodeOwner = function(node) {
          var _a;
          var target = void 0;
          for (var i = 0; i < this.getItemCount(); i++) {
            target = this.getItemAt(i).findDOMNodeOwner(node);
            if (target) {
              return target;
            }
          }
          for (var i = 0; i < this.getActionCount(); i++) {
            target = (_a = this.getActionAt(i)) === null || _a === void 0 ? void 0 : _a.findDOMNodeOwner(node);
            if (target) {
              return target;
            }
          }
          return _super.prototype.findDOMNodeOwner.call(this, node);
        };
        CardElementContainer2.selectActionProperty = new ActionProperty(serialization_1.Versions.v1_1, "selectAction", [
          "Action.ShowCard"
        ]);
        __decorate([
          (0, serialization_1.property)(CardElementContainer2.selectActionProperty)
        ], CardElementContainer2.prototype, "_selectAction", void 0);
        return CardElementContainer2;
      }(CardElement)
    );
    exports.CardElementContainer = CardElementContainer;
    var ImageSet = (
      /** @class */
      function(_super) {
        __extends(ImageSet2, _super);
        function ImageSet2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this._images = [];
          _this.imageSize = Enums.ImageSize.Medium;
          return _this;
        }
        ImageSet2.prototype.internalRender = function() {
          var element = void 0;
          if (this._images.length > 0) {
            element = document.createElement("div");
            element.style.display = "flex";
            element.style.flexWrap = "wrap";
            for (var _i = 0, _a = this._images; _i < _a.length; _i++) {
              var image = _a[_i];
              switch (this.imageSize) {
                case Enums.ImageSize.Small:
                  image.size = Enums.Size.Small;
                  break;
                case Enums.ImageSize.Large:
                  image.size = Enums.Size.Large;
                  break;
                default:
                  image.size = Enums.Size.Medium;
                  break;
              }
              image.maxHeight = this.hostConfig.imageSet.maxImageHeight;
              var renderedImage = image.render();
              if (renderedImage) {
                renderedImage.style.display = "inline-flex";
                renderedImage.style.margin = "0px";
                renderedImage.style.marginRight = "10px";
                Utils.appendChild(element, renderedImage);
              }
            }
          }
          return element;
        };
        ImageSet2.prototype.getItemCount = function() {
          return this._images.length;
        };
        ImageSet2.prototype.getItemAt = function(index) {
          return this._images[index];
        };
        ImageSet2.prototype.getFirstVisibleRenderedItem = function() {
          return this._images && this._images.length > 0 ? this._images[0] : void 0;
        };
        ImageSet2.prototype.getLastVisibleRenderedItem = function() {
          return this._images && this._images.length > 0 ? this._images[this._images.length - 1] : void 0;
        };
        ImageSet2.prototype.removeItem = function(item) {
          if (item instanceof Image) {
            var itemIndex = this._images.indexOf(item);
            if (itemIndex >= 0) {
              this._images.splice(itemIndex, 1);
              item.setParent(void 0);
              this.updateLayout();
              return true;
            }
          }
          return false;
        };
        ImageSet2.prototype.getJsonTypeName = function() {
          return "ImageSet";
        };
        ImageSet2.prototype.addImage = function(image) {
          if (!image.parent) {
            this._images.push(image);
            image.setParent(this);
          } else {
            throw new Error("This image already belongs to another ImageSet");
          }
        };
        ImageSet2.prototype.indexOf = function(cardElement) {
          return cardElement instanceof Image ? this._images.indexOf(cardElement) : -1;
        };
        ImageSet2.imagesProperty = new serialization_1.SerializableObjectCollectionProperty(serialization_1.Versions.v1_0, "images", Image, function(sender, item) {
          item.setParent(sender);
        });
        ImageSet2.imageSizeProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "imageSize", Enums.ImageSize, Enums.ImageSize.Medium);
        __decorate([
          (0, serialization_1.property)(ImageSet2.imagesProperty)
        ], ImageSet2.prototype, "_images", void 0);
        __decorate([
          (0, serialization_1.property)(ImageSet2.imageSizeProperty)
        ], ImageSet2.prototype, "imageSize", void 0);
        return ImageSet2;
      }(CardElementContainer)
    );
    exports.ImageSet = ImageSet;
    var ContentSource = (
      /** @class */
      function(_super) {
        __extends(ContentSource2, _super);
        function ContentSource2(url, mimeType) {
          var _this = _super.call(this) || this;
          _this.url = url;
          _this.mimeType = mimeType;
          return _this;
        }
        ContentSource2.prototype.isValid = function() {
          return this.mimeType && this.url ? true : false;
        };
        ContentSource2.mimeTypeProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_1, "mimeType");
        ContentSource2.urlProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_1, "url");
        __decorate([
          (0, serialization_1.property)(ContentSource2.mimeTypeProperty)
        ], ContentSource2.prototype, "mimeType", void 0);
        __decorate([
          (0, serialization_1.property)(ContentSource2.urlProperty)
        ], ContentSource2.prototype, "url", void 0);
        return ContentSource2;
      }(serialization_1.SerializableObject)
    );
    exports.ContentSource = ContentSource;
    var CaptionSource = (
      /** @class */
      function(_super) {
        __extends(CaptionSource2, _super);
        function CaptionSource2(url, mimeType, label) {
          var _this = _super.call(this, url, mimeType) || this;
          _this.label = label;
          return _this;
        }
        CaptionSource2.prototype.getSchemaKey = function() {
          return "CaptionSource";
        };
        CaptionSource2.prototype.render = function() {
          var result = void 0;
          if (this.isValid()) {
            result = document.createElement("track");
            result.src = this.url;
            result.kind = "captions";
            result.label = this.label;
          }
          return result;
        };
        CaptionSource2.labelProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_6, "label");
        __decorate([
          (0, serialization_1.property)(CaptionSource2.labelProperty)
        ], CaptionSource2.prototype, "label", void 0);
        return CaptionSource2;
      }(ContentSource)
    );
    exports.CaptionSource = CaptionSource;
    var MediaSource = (
      /** @class */
      function(_super) {
        __extends(MediaSource2, _super);
        function MediaSource2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        MediaSource2.prototype.getSchemaKey = function() {
          return "MediaSource";
        };
        MediaSource2.prototype.render = function() {
          var result = void 0;
          if (this.isValid()) {
            result = document.createElement("source");
            result.src = this.url;
            result.type = this.mimeType;
          }
          return result;
        };
        return MediaSource2;
      }(ContentSource)
    );
    exports.MediaSource = MediaSource;
    var MediaPlayer = (
      /** @class */
      function() {
        function MediaPlayer2() {
        }
        MediaPlayer2.prototype.play = function() {
        };
        Object.defineProperty(MediaPlayer2.prototype, "posterUrl", {
          get: function() {
            return this._posterUrl;
          },
          set: function(value) {
            this._posterUrl = value;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(MediaPlayer2.prototype, "selectedMediaType", {
          get: function() {
            return void 0;
          },
          enumerable: false,
          configurable: true
        });
        return MediaPlayer2;
      }()
    );
    exports.MediaPlayer = MediaPlayer;
    var HTML5MediaPlayer = (
      /** @class */
      function(_super) {
        __extends(HTML5MediaPlayer2, _super);
        function HTML5MediaPlayer2(owner) {
          var _this = _super.call(this) || this;
          _this.owner = owner;
          _this._selectedSources = [];
          _this._captionSources = [];
          _this.processSources();
          return _this;
        }
        HTML5MediaPlayer2.prototype.processSources = function() {
          var _a;
          this._selectedSources = [];
          this._captionSources = [];
          this._selectedMediaType = void 0;
          for (var _i = 0, _b = this.owner.sources; _i < _b.length; _i++) {
            var source = _b[_i];
            var mimeComponents = source.mimeType ? source.mimeType.split("/") : [];
            if (mimeComponents.length === 2) {
              if (!this._selectedMediaType) {
                var index = HTML5MediaPlayer2.supportedMediaTypes.indexOf(mimeComponents[0]);
                if (index >= 0) {
                  this._selectedMediaType = HTML5MediaPlayer2.supportedMediaTypes[index];
                }
              }
              if (mimeComponents[0] === this._selectedMediaType) {
                this._selectedSources.push(source);
              }
            }
          }
          (_a = this._captionSources).push.apply(_a, this.owner.captionSources);
        };
        HTML5MediaPlayer2.prototype.canPlay = function() {
          return this._selectedSources.length > 0;
        };
        HTML5MediaPlayer2.prototype.fetchVideoDetails = function() {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              return [
                2
                /*return*/
              ];
            });
          });
        };
        HTML5MediaPlayer2.prototype.render = function() {
          if (this._selectedMediaType === "video") {
            this._mediaElement = document.createElement("video");
          } else {
            this._mediaElement = document.createElement("audio");
          }
          this._mediaElement.setAttribute("aria-label", this.owner.altText ? this.owner.altText : strings_1.Strings.defaults.mediaPlayerAriaLabel());
          this._mediaElement.setAttribute("webkit-playsinline", "");
          this._mediaElement.setAttribute("playsinline", "");
          this._mediaElement.setAttribute("crossorigin", "");
          this._mediaElement.autoplay = true;
          this._mediaElement.controls = true;
          if (Utils.isMobileOS()) {
            this._mediaElement.muted = true;
          }
          this._mediaElement.preload = "none";
          this._mediaElement.style.width = "100%";
          for (var _i = 0, _a = this.owner.sources; _i < _a.length; _i++) {
            var source = _a[_i];
            var renderedSource = source.render();
            Utils.appendChild(this._mediaElement, renderedSource);
          }
          for (var _b = 0, _c = this.owner.captionSources; _b < _c.length; _b++) {
            var captionSource = _c[_b];
            if (captionSource.mimeType == "vtt") {
              var renderedCaptionSource = captionSource.render();
              Utils.appendChild(this._mediaElement, renderedCaptionSource);
            }
          }
          return this._mediaElement;
        };
        HTML5MediaPlayer2.prototype.play = function() {
          if (this._mediaElement) {
            this._mediaElement.play();
          }
        };
        Object.defineProperty(HTML5MediaPlayer2.prototype, "selectedMediaType", {
          get: function() {
            return this._selectedMediaType;
          },
          enumerable: false,
          configurable: true
        });
        HTML5MediaPlayer2.supportedMediaTypes = ["audio", "video"];
        return HTML5MediaPlayer2;
      }(MediaPlayer)
    );
    exports.HTML5MediaPlayer = HTML5MediaPlayer;
    var CustomMediaPlayer = (
      /** @class */
      function(_super) {
        __extends(CustomMediaPlayer2, _super);
        function CustomMediaPlayer2(matches) {
          return _super.call(this) || this;
        }
        return CustomMediaPlayer2;
      }(MediaPlayer)
    );
    exports.CustomMediaPlayer = CustomMediaPlayer;
    var IFrameMediaMediaPlayer = (
      /** @class */
      function(_super) {
        __extends(IFrameMediaMediaPlayer2, _super);
        function IFrameMediaMediaPlayer2(matches, iFrameTitle) {
          var _this = _super.call(this, matches) || this;
          _this.iFrameTitle = iFrameTitle;
          if (matches.length >= 2) {
            _this._videoId = matches[1];
          }
          return _this;
        }
        IFrameMediaMediaPlayer2.prototype.canPlay = function() {
          return this._videoId !== void 0;
        };
        IFrameMediaMediaPlayer2.prototype.render = function() {
          var container = document.createElement("div");
          container.style.position = "relative";
          container.style.width = "100%";
          container.style.height = "0";
          container.style.paddingBottom = "56.25%";
          var iFrame = document.createElement("iframe");
          iFrame.style.position = "absolute";
          iFrame.style.top = "0";
          iFrame.style.left = "0";
          iFrame.style.width = "100%";
          iFrame.style.height = "100%";
          iFrame.src = this.getEmbedVideoUrl();
          iFrame.frameBorder = "0";
          if (this.iFrameTitle) {
            iFrame.title = this.iFrameTitle;
          }
          iFrame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
          iFrame.allowFullscreen = true;
          container.appendChild(iFrame);
          return container;
        };
        Object.defineProperty(IFrameMediaMediaPlayer2.prototype, "videoId", {
          get: function() {
            return this._videoId;
          },
          enumerable: false,
          configurable: true
        });
        return IFrameMediaMediaPlayer2;
      }(CustomMediaPlayer)
    );
    exports.IFrameMediaMediaPlayer = IFrameMediaMediaPlayer;
    var VimeoPlayer = (
      /** @class */
      function(_super) {
        __extends(VimeoPlayer2, _super);
        function VimeoPlayer2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        VimeoPlayer2.prototype.fetchVideoDetails = function() {
          return __awaiter(this, void 0, void 0, function() {
            var oEmbedUrl, response, json;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  oEmbedUrl = "https://vimeo.com/api/oembed.json?url=".concat(this.getEmbedVideoUrl());
                  return [4, fetch(oEmbedUrl)];
                case 1:
                  response = _a.sent();
                  if (!response.ok)
                    return [3, 3];
                  return [4, response.json()];
                case 2:
                  json = _a.sent();
                  this.posterUrl = json["thumbnail_url"];
                  _a.label = 3;
                case 3:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        VimeoPlayer2.prototype.getEmbedVideoUrl = function() {
          return "https://player.vimeo.com/video/".concat(this.videoId, "?autoplay=1");
        };
        return VimeoPlayer2;
      }(IFrameMediaMediaPlayer)
    );
    exports.VimeoPlayer = VimeoPlayer;
    var DailymotionPlayer = (
      /** @class */
      function(_super) {
        __extends(DailymotionPlayer2, _super);
        function DailymotionPlayer2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        DailymotionPlayer2.prototype.fetchVideoDetails = function() {
          return __awaiter(this, void 0, void 0, function() {
            var apiUrl, response, json;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  apiUrl = "https://api.dailymotion.com/video/".concat(this.videoId, "?fields=thumbnail_720_url");
                  return [4, fetch(apiUrl)];
                case 1:
                  response = _a.sent();
                  if (!response.ok)
                    return [3, 3];
                  return [4, response.json()];
                case 2:
                  json = _a.sent();
                  this.posterUrl = json["thumbnail_720_url"];
                  _a.label = 3;
                case 3:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        DailymotionPlayer2.prototype.getEmbedVideoUrl = function() {
          return "https://www.dailymotion.com/embed/video/".concat(this.videoId, "?autoplay=1");
        };
        return DailymotionPlayer2;
      }(IFrameMediaMediaPlayer)
    );
    exports.DailymotionPlayer = DailymotionPlayer;
    var YouTubePlayer = (
      /** @class */
      function(_super) {
        __extends(YouTubePlayer2, _super);
        function YouTubePlayer2(matches, iFrameTitle) {
          var _this = _super.call(this, matches, iFrameTitle) || this;
          _this.iFrameTitle = iFrameTitle;
          if (matches.length >= 3 && matches[2] !== void 0) {
            _this._startTimeIndex = parseInt(matches[2]);
          }
          return _this;
        }
        YouTubePlayer2.prototype.fetchVideoDetails = function() {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              this.posterUrl = this.videoId ? "https://img.youtube.com/vi/".concat(this.videoId, "/maxresdefault.jpg") : void 0;
              return [
                2
                /*return*/
              ];
            });
          });
        };
        YouTubePlayer2.prototype.getEmbedVideoUrl = function() {
          var url = "https://www.youtube.com/embed/".concat(this.videoId, "?autoplay=1");
          if (this._startTimeIndex !== void 0) {
            url += "&start=".concat(this._startTimeIndex);
          }
          return url;
        };
        return YouTubePlayer2;
      }(IFrameMediaMediaPlayer)
    );
    exports.YouTubePlayer = YouTubePlayer;
    var Media = (
      /** @class */
      function(_super) {
        __extends(Media2, _super);
        function Media2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.sources = [];
          _this.captionSources = [];
          return _this;
        }
        Media2.prototype.createMediaPlayer = function() {
          for (var _i = 0, _a = Media2.customMediaPlayers; _i < _a.length; _i++) {
            var provider = _a[_i];
            for (var _b = 0, _c = this.sources; _b < _c.length; _b++) {
              var source = _c[_b];
              if (source.url) {
                for (var _d = 0, _f = provider.urlPatterns; _d < _f.length; _d++) {
                  var pattern = _f[_d];
                  var matches = pattern.exec(source.url);
                  if (matches !== null) {
                    return provider.createMediaPlayer(matches);
                  }
                }
              }
            }
          }
          return new HTML5MediaPlayer(this);
        };
        Media2.prototype.handlePlayButtonInvoke = function(event) {
          if (this.hostConfig.media.allowInlinePlayback) {
            event.preventDefault();
            event.cancelBubble = true;
            if (this.renderedElement) {
              var mediaPlayerElement = this._mediaPlayer.render();
              clearElement(this.renderedElement);
              this.renderedElement.appendChild(mediaPlayerElement);
              this._mediaPlayer.play();
              mediaPlayerElement.focus();
            }
          } else {
            if (Media2.onPlay) {
              event.preventDefault();
              event.cancelBubble = true;
              Media2.onPlay(this);
            }
          }
        };
        Media2.prototype.displayPoster = function() {
          return __awaiter(this, void 0, void 0, function() {
            var playButtonArrowWidth, playButtonArrowHeight, posterRootElement_1, posterUrl, posterImageElement_1, playButtonOuterElement, playButtonInnerElement, playButtonContainer;
            var _this = this;
            return __generator(this, function(_a) {
              if (this.renderedElement) {
                playButtonArrowWidth = 12;
                playButtonArrowHeight = 15;
                posterRootElement_1 = document.createElement("div");
                posterRootElement_1.className = this.hostConfig.makeCssClassName("ac-media-poster");
                posterRootElement_1.setAttribute("role", "contentinfo");
                posterRootElement_1.setAttribute("aria-label", this.altText ? this.altText : strings_1.Strings.defaults.mediaPlayerAriaLabel());
                posterRootElement_1.style.position = "relative";
                posterRootElement_1.style.display = "flex";
                posterUrl = this.poster ? this.poster : this._mediaPlayer.posterUrl;
                if (!posterUrl) {
                  posterUrl = this.hostConfig.media.defaultPoster;
                }
                if (posterUrl) {
                  posterImageElement_1 = document.createElement("img");
                  posterImageElement_1.style.width = "100%";
                  posterImageElement_1.style.height = "100%";
                  posterImageElement_1.setAttribute("role", "presentation");
                  posterImageElement_1.onerror = function(_e) {
                    if (posterImageElement_1.parentNode) {
                      posterImageElement_1.parentNode.removeChild(posterImageElement_1);
                    }
                    posterRootElement_1.classList.add("empty");
                    posterRootElement_1.style.minHeight = "150px";
                  };
                  posterImageElement_1.src = posterUrl;
                  posterRootElement_1.appendChild(posterImageElement_1);
                } else {
                  posterRootElement_1.classList.add("empty");
                  posterRootElement_1.style.minHeight = "150px";
                }
                if (this.hostConfig.supportsInteractivity && this._mediaPlayer.canPlay()) {
                  playButtonOuterElement = document.createElement("div");
                  playButtonOuterElement.tabIndex = 0;
                  playButtonOuterElement.setAttribute("role", "button");
                  playButtonOuterElement.setAttribute("aria-label", strings_1.Strings.defaults.mediaPlayerPlayMedia());
                  playButtonOuterElement.className = this.hostConfig.makeCssClassName("ac-media-playButton");
                  playButtonOuterElement.style.display = "flex";
                  playButtonOuterElement.style.alignItems = "center";
                  playButtonOuterElement.style.justifyContent = "center";
                  playButtonOuterElement.onclick = function(e) {
                    _this.handlePlayButtonInvoke(e);
                  };
                  playButtonOuterElement.onkeypress = function(e) {
                    if (e.code === "Enter" || e.code === "Space") {
                      _this.handlePlayButtonInvoke(e);
                    }
                  };
                  playButtonInnerElement = document.createElement("div");
                  playButtonInnerElement.className = this.hostConfig.makeCssClassName("ac-media-playButton-arrow");
                  playButtonInnerElement.style.width = playButtonArrowWidth + "px";
                  playButtonInnerElement.style.height = playButtonArrowHeight + "px";
                  playButtonInnerElement.style.borderTopWidth = playButtonArrowHeight / 2 + "px";
                  playButtonInnerElement.style.borderBottomWidth = playButtonArrowHeight / 2 + "px";
                  playButtonInnerElement.style.borderLeftWidth = playButtonArrowWidth + "px";
                  playButtonInnerElement.style.borderRightWidth = "0";
                  playButtonInnerElement.style.borderStyle = "solid";
                  playButtonInnerElement.style.borderTopColor = "transparent";
                  playButtonInnerElement.style.borderRightColor = "transparent";
                  playButtonInnerElement.style.borderBottomColor = "transparent";
                  playButtonInnerElement.style.transform = "translate(" + playButtonArrowWidth / 10 + "px,0px)";
                  playButtonOuterElement.appendChild(playButtonInnerElement);
                  playButtonContainer = document.createElement("div");
                  playButtonContainer.style.position = "absolute";
                  playButtonContainer.style.left = "0";
                  playButtonContainer.style.top = "0";
                  playButtonContainer.style.width = "100%";
                  playButtonContainer.style.height = "100%";
                  playButtonContainer.style.display = "flex";
                  playButtonContainer.style.justifyContent = "center";
                  playButtonContainer.style.alignItems = "center";
                  playButtonContainer.appendChild(playButtonOuterElement);
                  posterRootElement_1.appendChild(playButtonContainer);
                }
                clearElement(this.renderedElement);
                this.renderedElement.appendChild(posterRootElement_1);
              }
              return [
                2
                /*return*/
              ];
            });
          });
        };
        Media2.prototype.internalRender = function() {
          var element = document.createElement("div");
          element.className = this.hostConfig.makeCssClassName("ac-media");
          return element;
        };
        Media2.prototype.render = function() {
          var _this = this;
          var result = _super.prototype.render.call(this);
          if (result) {
            this._mediaPlayer = this.createMediaPlayer();
            this._mediaPlayer.fetchVideoDetails().then(function() {
              return _this.displayPoster();
            });
          }
          return result;
        };
        Media2.prototype.releaseDOMResources = function() {
          _super.prototype.releaseDOMResources.call(this);
          this.displayPoster();
        };
        Media2.prototype.getJsonTypeName = function() {
          return "Media";
        };
        Media2.prototype.getResourceInformation = function() {
          var result = [];
          if (this._mediaPlayer) {
            var posterUrl = this.poster ? this.poster : this.hostConfig.media.defaultPoster;
            if (posterUrl) {
              result.push({ url: posterUrl, mimeType: "image" });
            }
          }
          for (var _i = 0, _a = this.sources; _i < _a.length; _i++) {
            var mediaSource = _a[_i];
            if (mediaSource.isValid()) {
              result.push({
                /* eslint-disable @typescript-eslint/no-unnecessary-type-assertion -- `mediaSource.url` is of type `string | undefined`, but is validated by `isValid()` call */
                url: mediaSource.url,
                mimeType: mediaSource.mimeType
                /* eslint-enable @typescript-eslint/no-unnecessary-type-assertion */
              });
            }
          }
          for (var _b = 0, _c = this.captionSources; _b < _c.length; _b++) {
            var captionSource = _c[_b];
            if (captionSource.isValid()) {
              result.push({
                /* eslint-disable @typescript-eslint/no-unnecessary-type-assertion -- `captionSource.url` is of type `string | undefined`, but is validated by `isValid()` call */
                url: captionSource.url,
                mimeType: captionSource.mimeType
                /* eslint-enable @typescript-eslint/no-unnecessary-type-assertion */
              });
            }
          }
          return result;
        };
        Object.defineProperty(Media2.prototype, "selectedMediaType", {
          get: function() {
            return this._mediaPlayer.selectedMediaType;
          },
          enumerable: false,
          configurable: true
        });
        Media2.customMediaPlayers = [
          {
            urlPatterns: [
              /^(?:https?:\/\/)?(?:www.)?youtube.com\/watch\?(?=.*v=([\w\d-_]+))(?=(?:.*t=(\d+))?).*/gi,
              /^(?:https?:\/\/)?youtu.be\/([\w\d-_]+)(?:\?t=(\d+))?/gi
            ],
            createMediaPlayer: function(matches) {
              return new YouTubePlayer(matches, strings_1.Strings.defaults.youTubeVideoPlayer());
            }
          },
          {
            urlPatterns: [/^(?:https?:\/\/)?vimeo.com\/([\w\d-_]+).*/gi],
            createMediaPlayer: function(matches) {
              return new VimeoPlayer(matches, strings_1.Strings.defaults.vimeoVideoPlayer());
            }
          },
          {
            urlPatterns: [/^(?:https?:\/\/)?(?:www.)?dailymotion.com\/video\/([\w\d-_]+).*/gi],
            createMediaPlayer: function(matches) {
              return new DailymotionPlayer(matches, strings_1.Strings.defaults.dailymotionVideoPlayer());
            }
          }
        ];
        Media2.sourcesProperty = new serialization_1.SerializableObjectCollectionProperty(serialization_1.Versions.v1_1, "sources", MediaSource);
        Media2.captionSourcesProperty = new serialization_1.SerializableObjectCollectionProperty(serialization_1.Versions.v1_6, "captionSources", CaptionSource);
        Media2.posterProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_1, "poster");
        Media2.altTextProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_1, "altText");
        __decorate([
          (0, serialization_1.property)(Media2.sourcesProperty)
        ], Media2.prototype, "sources", void 0);
        __decorate([
          (0, serialization_1.property)(Media2.captionSourcesProperty)
        ], Media2.prototype, "captionSources", void 0);
        __decorate([
          (0, serialization_1.property)(Media2.posterProperty)
        ], Media2.prototype, "poster", void 0);
        __decorate([
          (0, serialization_1.property)(Media2.altTextProperty)
        ], Media2.prototype, "altText", void 0);
        return Media2;
      }(CardElement)
    );
    exports.Media = Media;
    var Input = (
      /** @class */
      function(_super) {
        __extends(Input2, _super);
        function Input2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        Input2.prototype.getAllLabelIds = function() {
          var labelIds = [];
          if (this.labelledBy) {
            labelIds.push(this.labelledBy);
          }
          if (this._renderedLabelElement) {
            labelIds.push(this._renderedLabelElement.id);
          }
          if (this._renderedErrorMessageElement) {
            labelIds.push(this._renderedErrorMessageElement.id);
          }
          return labelIds;
        };
        Input2.prototype.updateInputControlAriaLabelledBy = function() {
          if (this._renderedInputControlElement) {
            var labelIds = this.getAllLabelIds();
            if (labelIds.length > 0) {
              this._renderedInputControlElement.setAttribute("aria-labelledby", labelIds.join(" "));
            } else {
              this._renderedInputControlElement.removeAttribute("aria-labelledby");
            }
          }
        };
        Object.defineProperty(Input2.prototype, "isNullable", {
          get: function() {
            return true;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Input2.prototype, "renderedInputControlElement", {
          get: function() {
            return this._renderedInputControlElement;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Input2.prototype, "inputControlContainerElement", {
          get: function() {
            return this._inputControlContainerElement;
          },
          enumerable: false,
          configurable: true
        });
        Input2.prototype.overrideInternalRender = function() {
          var hostConfig = this.hostConfig;
          this._outerContainerElement = document.createElement("div");
          this._outerContainerElement.style.display = "flex";
          this._outerContainerElement.style.flexDirection = "column";
          var renderedInputControlId = Utils.generateUniqueId();
          if (this.label) {
            var labelRichTextBlock = new RichTextBlock();
            labelRichTextBlock.setParent(this);
            labelRichTextBlock.forElementId = renderedInputControlId;
            var labelInline = new TextRun(this.label);
            labelRichTextBlock.addInline(labelInline);
            if (this.isRequired) {
              labelInline.init(hostConfig.inputs.label.requiredInputs);
              var isRequiredCueInline = new TextRun(hostConfig.inputs.label.requiredInputs.suffix);
              isRequiredCueInline.color = hostConfig.inputs.label.requiredInputs.suffixColor;
              isRequiredCueInline.ariaHidden = true;
              labelRichTextBlock.addInline(isRequiredCueInline);
            } else {
              labelInline.init(hostConfig.inputs.label.optionalInputs);
            }
            this._renderedLabelElement = labelRichTextBlock.render();
            if (this._renderedLabelElement) {
              this._renderedLabelElement.id = Utils.generateUniqueId();
              this._renderedLabelElement.style.marginBottom = hostConfig.getEffectiveSpacing(hostConfig.inputs.label.inputSpacing) + "px";
              this._outerContainerElement.appendChild(this._renderedLabelElement);
            }
          }
          this._inputControlContainerElement = document.createElement("div");
          this._inputControlContainerElement.className = hostConfig.makeCssClassName("ac-input-container");
          this._inputControlContainerElement.style.display = "flex";
          if (this.height === "stretch") {
            this._inputControlContainerElement.style.alignItems = "stretch";
            this._inputControlContainerElement.style.flex = "1 1 auto";
          }
          this._renderedInputControlElement = this.internalRender();
          if (this._renderedInputControlElement) {
            this._renderedInputControlElement.id = renderedInputControlId;
            this._renderedInputControlElement.style.minWidth = "0px";
            if (this.isNullable && this.isRequired) {
              this._renderedInputControlElement.setAttribute("aria-required", "true");
              this._renderedInputControlElement.classList.add(hostConfig.makeCssClassName("ac-input-required"));
            }
            this._inputControlContainerElement.appendChild(this._renderedInputControlElement);
            this._outerContainerElement.appendChild(this._inputControlContainerElement);
            this.updateInputControlAriaLabelledBy();
            return this._outerContainerElement;
          }
          this.resetDirtyState();
          return void 0;
        };
        Input2.prototype.valueChanged = function() {
          this.getRootElement().updateActionsEnabledState();
          if (this.isValid()) {
            this.resetValidationFailureCue();
          }
          if (this.onValueChanged) {
            this.onValueChanged(this);
          }
          raiseInputValueChangedEvent(this);
        };
        Input2.prototype.resetValidationFailureCue = function() {
          if (this.renderedInputControlElement) {
            this.renderedInputControlElement.classList.remove(this.hostConfig.makeCssClassName("ac-input-validation-failed"));
            this.updateInputControlAriaLabelledBy();
            if (this._renderedErrorMessageElement) {
              this._outerContainerElement.removeChild(this._renderedErrorMessageElement);
              this._renderedErrorMessageElement = void 0;
            }
          }
        };
        Input2.prototype.showValidationErrorMessage = function() {
          if (this.renderedElement && this.errorMessage && shared_1.GlobalSettings.displayInputValidationErrors) {
            var errorMessageTextBlock = new TextBlock();
            errorMessageTextBlock.setParent(this);
            errorMessageTextBlock.text = this.errorMessage;
            errorMessageTextBlock.wrap = true;
            errorMessageTextBlock.init(this.hostConfig.inputs.errorMessage);
            this._renderedErrorMessageElement = errorMessageTextBlock.render();
            if (this._renderedErrorMessageElement) {
              this._renderedErrorMessageElement.id = Utils.generateUniqueId();
              this._outerContainerElement.appendChild(this._renderedErrorMessageElement);
              this.updateInputControlAriaLabelledBy();
            }
          }
        };
        Input2.prototype.focus = function() {
          if (this._renderedInputControlElement) {
            this._renderedInputControlElement.focus();
          }
        };
        Input2.prototype.isValid = function() {
          return true;
        };
        Input2.prototype.isDirty = function() {
          return this.value !== this._oldValue;
        };
        Input2.prototype.resetDirtyState = function() {
          this._oldValue = this.value;
        };
        Input2.prototype.internalValidateProperties = function(context) {
          _super.prototype.internalValidateProperties.call(this, context);
          if (!this.id) {
            context.addFailure(this, Enums.ValidationEvent.PropertyCantBeNull, strings_1.Strings.errors.inputsMustHaveUniqueId());
          }
          if (this.isRequired) {
            if (!this.label) {
              context.addFailure(this, Enums.ValidationEvent.RequiredInputsShouldHaveLabel, "Required inputs should have a label");
            }
            if (!this.errorMessage) {
              context.addFailure(this, Enums.ValidationEvent.RequiredInputsShouldHaveErrorMessage, "Required inputs should have an error message");
            }
          }
        };
        Input2.prototype.validateValue = function() {
          this.resetValidationFailureCue();
          var result = this.isRequired ? this.isSet() && this.isValid() : this.isValid();
          if (!result && this.renderedInputControlElement) {
            this.renderedInputControlElement.classList.add(this.hostConfig.makeCssClassName("ac-input-validation-failed"));
            this.showValidationErrorMessage();
          }
          return result;
        };
        Input2.prototype.getAllInputs = function(processActions) {
          if (processActions === void 0) {
            processActions = true;
          }
          return [this];
        };
        Input2.prototype.render = function() {
          var result = _super.prototype.render.call(this);
          this.resetDirtyState();
          return result;
        };
        Object.defineProperty(Input2.prototype, "isInteractive", {
          get: function() {
            return true;
          },
          enumerable: false,
          configurable: true
        });
        Input2.labelProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_3, "label", true);
        Input2.isRequiredProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_3, "isRequired", false);
        Input2.errorMessageProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_3, "errorMessage", true);
        __decorate([
          (0, serialization_1.property)(Input2.labelProperty)
        ], Input2.prototype, "label", void 0);
        __decorate([
          (0, serialization_1.property)(Input2.isRequiredProperty)
        ], Input2.prototype, "isRequired", void 0);
        __decorate([
          (0, serialization_1.property)(Input2.errorMessageProperty)
        ], Input2.prototype, "errorMessage", void 0);
        return Input2;
      }(CardElement)
    );
    exports.Input = Input;
    var TextInput = (
      /** @class */
      function(_super) {
        __extends(TextInput2, _super);
        function TextInput2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.isMultiline = false;
          _this.style = Enums.InputTextStyle.Text;
          return _this;
        }
        TextInput2.prototype.setupInput = function(input) {
          var _this = this;
          input.style.flex = "1 1 auto";
          input.tabIndex = this.isDesignMode() ? -1 : 0;
          if (this.placeholder) {
            input.placeholder = this.placeholder;
            input.setAttribute("aria-label", this.placeholder);
          }
          if (this.defaultValue) {
            input.value = this.defaultValue;
          }
          if (this.maxLength && this.maxLength > 0) {
            input.maxLength = this.maxLength;
          }
          input.oninput = function() {
            _this.valueChanged();
          };
          input.onkeypress = function(e) {
            if (e.ctrlKey && e.code === "Enter" && _this.inlineAction && _this.inlineAction.isEffectivelyEnabled()) {
              _this.inlineAction.execute();
            }
          };
        };
        TextInput2.prototype.internalRender = function() {
          var result;
          if (this.isMultiline && this.style !== Enums.InputTextStyle.Password) {
            result = document.createElement("textarea");
            result.className = this.hostConfig.makeCssClassName("ac-input", "ac-textInput", "ac-multiline");
            if (this.height === "stretch") {
              result.style.height = "initial";
            }
          } else {
            result = document.createElement("input");
            result.className = this.hostConfig.makeCssClassName("ac-input", "ac-textInput");
            result.type = Enums.InputTextStyle[this.style].toLowerCase();
          }
          this.setupInput(result);
          return result;
        };
        TextInput2.prototype.overrideInternalRender = function() {
          var _this = this;
          var renderedInputControl = _super.prototype.overrideInternalRender.call(this);
          if (this.inlineAction) {
            var button_1 = document.createElement("button");
            button_1.className = this.hostConfig.makeCssClassName(this.inlineAction.isEffectivelyEnabled() ? "ac-inlineActionButton" : "ac-inlineActionButton-disabled");
            button_1.onclick = function(e) {
              if (_this.inlineAction && _this.inlineAction.isEffectivelyEnabled()) {
                e.preventDefault();
                e.cancelBubble = true;
                _this.inlineAction.execute();
              }
            };
            if (this.inlineAction.iconUrl) {
              button_1.classList.add("iconOnly");
              var icon_1 = document.createElement("img");
              icon_1.style.height = "100%";
              icon_1.setAttribute("role", "presentation");
              icon_1.style.display = "none";
              icon_1.onload = function() {
                icon_1.style.removeProperty("display");
              };
              icon_1.onerror = function() {
                button_1.removeChild(icon_1);
                button_1.classList.remove("iconOnly");
                button_1.classList.add("textOnly");
                button_1.textContent = _this.inlineAction && _this.inlineAction.title ? _this.inlineAction.title : strings_1.Strings.defaults.inlineActionTitle();
              };
              icon_1.src = this.inlineAction.iconUrl;
              button_1.appendChild(icon_1);
              button_1.title = this.inlineAction.title ? this.inlineAction.title : strings_1.Strings.defaults.inlineActionTitle();
            } else {
              button_1.classList.add("textOnly");
              button_1.textContent = this.inlineAction.title ? this.inlineAction.title : strings_1.Strings.defaults.inlineActionTitle();
            }
            this.inlineAction.setupElementForAccessibility(button_1, true);
            button_1.style.marginLeft = "8px";
            this.inputControlContainerElement.appendChild(button_1);
          }
          return renderedInputControl;
        };
        TextInput2.prototype.getJsonTypeName = function() {
          return "Input.Text";
        };
        TextInput2.prototype.getAllActions = function() {
          var result = _super.prototype.getAllActions.call(this);
          if (this.inlineAction) {
            result.push(this.inlineAction);
          }
          return result;
        };
        TextInput2.prototype.getActionById = function(id) {
          var result = _super.prototype.getActionById.call(this, id);
          if (!result && this.inlineAction) {
            result = this.inlineAction.getActionById(id);
          }
          return result;
        };
        TextInput2.prototype.isSet = function() {
          return this.value ? true : false;
        };
        TextInput2.prototype.isValid = function() {
          if (!this.value) {
            return true;
          }
          if (this.regex) {
            return new RegExp(this.regex, "g").test(this.value);
          }
          return true;
        };
        Object.defineProperty(TextInput2.prototype, "value", {
          get: function() {
            if (this.renderedInputControlElement) {
              if (this.isMultiline) {
                return this.renderedInputControlElement.value;
              } else {
                return this.renderedInputControlElement.value;
              }
            } else {
              return void 0;
            }
          },
          enumerable: false,
          configurable: true
        });
        TextInput2.valueProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "value");
        TextInput2.maxLengthProperty = new serialization_1.NumProperty(serialization_1.Versions.v1_0, "maxLength");
        TextInput2.isMultilineProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_0, "isMultiline", false);
        TextInput2.placeholderProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "placeholder");
        TextInput2.styleProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "style", Enums.InputTextStyle, Enums.InputTextStyle.Text, [
          { value: Enums.InputTextStyle.Text },
          { value: Enums.InputTextStyle.Tel },
          { value: Enums.InputTextStyle.Url },
          { value: Enums.InputTextStyle.Email },
          { value: Enums.InputTextStyle.Password, targetVersion: serialization_1.Versions.v1_5 }
        ]);
        TextInput2.inlineActionProperty = new ActionProperty(serialization_1.Versions.v1_0, "inlineAction", [
          "Action.ShowCard"
        ]);
        TextInput2.regexProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_3, "regex", true);
        __decorate([
          (0, serialization_1.property)(TextInput2.valueProperty)
        ], TextInput2.prototype, "defaultValue", void 0);
        __decorate([
          (0, serialization_1.property)(TextInput2.maxLengthProperty)
        ], TextInput2.prototype, "maxLength", void 0);
        __decorate([
          (0, serialization_1.property)(TextInput2.isMultilineProperty)
        ], TextInput2.prototype, "isMultiline", void 0);
        __decorate([
          (0, serialization_1.property)(TextInput2.placeholderProperty)
        ], TextInput2.prototype, "placeholder", void 0);
        __decorate([
          (0, serialization_1.property)(TextInput2.styleProperty)
        ], TextInput2.prototype, "style", void 0);
        __decorate([
          (0, serialization_1.property)(TextInput2.inlineActionProperty)
        ], TextInput2.prototype, "inlineAction", void 0);
        __decorate([
          (0, serialization_1.property)(TextInput2.regexProperty)
        ], TextInput2.prototype, "regex", void 0);
        return TextInput2;
      }(Input)
    );
    exports.TextInput = TextInput;
    var ToggleInput = (
      /** @class */
      function(_super) {
        __extends(ToggleInput2, _super);
        function ToggleInput2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.valueOn = "true";
          _this.valueOff = "false";
          _this.wrap = false;
          return _this;
        }
        ToggleInput2.prototype.updateInputControlAriaLabelledBy = function() {
          if (this._checkboxInputElement) {
            var joinedLabelIds = this.getAllLabelIds().join(" ");
            if (this._checkboxInputLabelElement && this._checkboxInputLabelElement.id) {
              joinedLabelIds += " " + this._checkboxInputLabelElement.id;
            }
            if (joinedLabelIds) {
              this._checkboxInputElement.setAttribute("aria-labelledby", joinedLabelIds);
            } else {
              this._checkboxInputElement.removeAttribute("aria-labelledby");
            }
          }
        };
        ToggleInput2.prototype.internalRender = function() {
          var _this = this;
          var element = document.createElement("div");
          element.className = this.hostConfig.makeCssClassName("ac-input", "ac-toggleInput");
          element.style.width = "100%";
          element.style.display = "flex";
          element.style.alignItems = "center";
          this._checkboxInputElement = document.createElement("input");
          this._checkboxInputElement.id = Utils.generateUniqueId();
          this._checkboxInputElement.type = "checkbox";
          this._checkboxInputElement.style.display = "inline-block";
          this._checkboxInputElement.style.verticalAlign = "middle";
          this._checkboxInputElement.style.margin = "0";
          this._checkboxInputElement.style.flex = "0 0 auto";
          if (this.title) {
            this._checkboxInputElement.setAttribute("aria-label", this.title);
          }
          if (this.isRequired) {
            this._checkboxInputElement.setAttribute("aria-required", "true");
          }
          this._checkboxInputElement.tabIndex = this.isDesignMode() ? -1 : 0;
          if (this.defaultValue === this.valueOn) {
            this._checkboxInputElement.checked = true;
          }
          this._oldCheckboxValue = this._checkboxInputElement.checked;
          this._checkboxInputElement.onchange = function() {
            _this.valueChanged();
          };
          Utils.appendChild(element, this._checkboxInputElement);
          if (this.title || this.isDesignMode()) {
            var label = new TextBlock();
            label.setParent(this);
            label.forElementId = this._checkboxInputElement.id;
            label.hostConfig = this.hostConfig;
            label.text = !this.title ? this.getJsonTypeName() : this.title;
            label.useMarkdown = shared_1.GlobalSettings.useMarkdownInRadioButtonAndCheckbox;
            label.wrap = this.wrap;
            this._checkboxInputLabelElement = label.render();
            if (this._checkboxInputLabelElement) {
              this._checkboxInputLabelElement.id = Utils.generateUniqueId();
              this._checkboxInputLabelElement.style.display = "inline-block";
              this._checkboxInputLabelElement.style.flex = "1 1 auto";
              this._checkboxInputLabelElement.style.marginLeft = "6px";
              this._checkboxInputLabelElement.style.verticalAlign = "middle";
              var spacerElement = document.createElement("div");
              spacerElement.style.width = "6px";
              Utils.appendChild(element, spacerElement);
              Utils.appendChild(element, this._checkboxInputLabelElement);
            }
          }
          return element;
        };
        Object.defineProperty(ToggleInput2.prototype, "isNullable", {
          get: function() {
            return false;
          },
          enumerable: false,
          configurable: true
        });
        ToggleInput2.prototype.getJsonTypeName = function() {
          return "Input.Toggle";
        };
        ToggleInput2.prototype.focus = function() {
          if (this._checkboxInputElement) {
            this._checkboxInputElement.focus();
          }
        };
        ToggleInput2.prototype.isSet = function() {
          if (this.isRequired) {
            return this.value === this.valueOn;
          }
          return this.value ? true : false;
        };
        ToggleInput2.prototype.isDirty = function() {
          return this._checkboxInputElement ? this._checkboxInputElement.checked !== this._oldCheckboxValue : false;
        };
        Object.defineProperty(ToggleInput2.prototype, "value", {
          get: function() {
            if (this._checkboxInputElement) {
              return this._checkboxInputElement.checked ? this.valueOn : this.valueOff;
            } else {
              return void 0;
            }
          },
          enumerable: false,
          configurable: true
        });
        ToggleInput2.valueProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "value");
        ToggleInput2.titleProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "title");
        ToggleInput2.valueOnProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "valueOn", true, void 0, "true", function(sender) {
          return "true";
        });
        ToggleInput2.valueOffProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "valueOff", true, void 0, "false", function(sender) {
          return "false";
        });
        ToggleInput2.wrapProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_2, "wrap", false);
        __decorate([
          (0, serialization_1.property)(ToggleInput2.valueProperty)
        ], ToggleInput2.prototype, "defaultValue", void 0);
        __decorate([
          (0, serialization_1.property)(ToggleInput2.titleProperty)
        ], ToggleInput2.prototype, "title", void 0);
        __decorate([
          (0, serialization_1.property)(ToggleInput2.valueOnProperty)
        ], ToggleInput2.prototype, "valueOn", void 0);
        __decorate([
          (0, serialization_1.property)(ToggleInput2.valueOffProperty)
        ], ToggleInput2.prototype, "valueOff", void 0);
        __decorate([
          (0, serialization_1.property)(ToggleInput2.wrapProperty)
        ], ToggleInput2.prototype, "wrap", void 0);
        return ToggleInput2;
      }(Input)
    );
    exports.ToggleInput = ToggleInput;
    var Choice = (
      /** @class */
      function(_super) {
        __extends(Choice2, _super);
        function Choice2(title, value) {
          var _this = _super.call(this) || this;
          _this.title = title;
          _this.value = value;
          return _this;
        }
        Choice2.prototype.getSchemaKey = function() {
          return "Choice";
        };
        Choice2.titleProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "title");
        Choice2.valueProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "value");
        __decorate([
          (0, serialization_1.property)(Choice2.titleProperty)
        ], Choice2.prototype, "title", void 0);
        __decorate([
          (0, serialization_1.property)(Choice2.valueProperty)
        ], Choice2.prototype, "value", void 0);
        return Choice2;
      }(serialization_1.SerializableObject)
    );
    exports.Choice = Choice;
    var ChoiceSetInput = (
      /** @class */
      function(_super) {
        __extends(ChoiceSetInput2, _super);
        function ChoiceSetInput2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.isMultiSelect = false;
          _this.wrap = false;
          _this.choices = [];
          return _this;
        }
        Object.defineProperty(ChoiceSetInput2.prototype, "isCompact", {
          get: function() {
            return !this.style || this.style === "compact";
          },
          set: function(value) {
            this.style = value ? void 0 : "expanded";
          },
          enumerable: false,
          configurable: true
        });
        ChoiceSetInput2.getUniqueCategoryName = function() {
          var uniqueCategoryName = "__ac-category" + ChoiceSetInput2._uniqueCategoryCounter;
          ChoiceSetInput2._uniqueCategoryCounter++;
          return uniqueCategoryName;
        };
        ChoiceSetInput2.prototype.internalApplyAriaCurrent = function() {
          if (this._selectElement) {
            var options = this._selectElement.options;
            if (options) {
              for (var _i = 0, _a = Array.from(options); _i < _a.length; _i++) {
                var option = _a[_i];
                if (option.selected) {
                  option.setAttribute("aria-current", "true");
                } else {
                  option.removeAttribute("aria-current");
                }
              }
            }
          }
        };
        ChoiceSetInput2.prototype.renderCompoundInput = function(cssClassName, type, defaultValues) {
          var _this = this;
          var element = document.createElement("div");
          element.className = this.hostConfig.makeCssClassName("ac-input", cssClassName);
          element.style.width = "100%";
          element.tabIndex = this.isDesignMode() ? -1 : 0;
          this._toggleInputs = [];
          this._labels = [];
          for (var _i = 0, _a = this.choices; _i < _a.length; _i++) {
            var choice = _a[_i];
            var input = document.createElement("input");
            input.id = Utils.generateUniqueId();
            input.type = type;
            input.style.margin = "0";
            input.style.display = "inline-block";
            input.style.verticalAlign = "middle";
            input.style.flex = "0 0 auto";
            input.name = this.id ? this.id : this._uniqueCategoryName;
            if (this.isRequired) {
              input.setAttribute("aria-required", "true");
            }
            input.tabIndex = this.isDesignMode() ? -1 : 0;
            if (choice.value) {
              input.value = choice.value;
            }
            if (choice.title) {
              input.setAttribute("aria-label", choice.title);
            }
            if (defaultValues && choice.value) {
              if (defaultValues.indexOf(choice.value) >= 0) {
                input.checked = true;
              }
            }
            input.onchange = function() {
              _this.valueChanged();
            };
            this._toggleInputs.push(input);
            var compoundInput = document.createElement("div");
            compoundInput.style.display = "flex";
            compoundInput.style.alignItems = "center";
            Utils.appendChild(compoundInput, input);
            var label = new TextBlock();
            label.setParent(this);
            label.forElementId = input.id;
            label.hostConfig = this.hostConfig;
            label.text = choice.title ? choice.title : "Choice " + this._toggleInputs.length;
            label.useMarkdown = shared_1.GlobalSettings.useMarkdownInRadioButtonAndCheckbox;
            label.wrap = this.wrap;
            var labelElement = label.render();
            this._labels.push(labelElement);
            if (labelElement) {
              labelElement.id = Utils.generateUniqueId();
              labelElement.style.display = "inline-block";
              labelElement.style.flex = "1 1 auto";
              labelElement.style.marginLeft = "6px";
              labelElement.style.verticalAlign = "middle";
              var spacerElement = document.createElement("div");
              spacerElement.style.width = "6px";
              Utils.appendChild(compoundInput, spacerElement);
              Utils.appendChild(compoundInput, labelElement);
            }
            Utils.appendChild(element, compoundInput);
          }
          return element;
        };
        ChoiceSetInput2.prototype.updateInputControlAriaLabelledBy = function() {
          if ((this.isMultiSelect || this.style === "expanded") && this._toggleInputs && this._labels) {
            var labelIds = this.getAllLabelIds();
            for (var i = 0; i < this._toggleInputs.length; i++) {
              var joinedLabelIds = labelIds.join(" ");
              var label = this._labels[i];
              if (label && label.id) {
                joinedLabelIds += " " + label.id;
              }
              if (joinedLabelIds) {
                this._toggleInputs[i].setAttribute("aria-labelledby", joinedLabelIds);
              } else {
                this._toggleInputs[i].removeAttribute("aria-labelledby");
              }
            }
          } else {
            _super.prototype.updateInputControlAriaLabelledBy.call(this);
          }
        };
        ChoiceSetInput2.prototype.internalRender = function() {
          var _this = this;
          this._uniqueCategoryName = ChoiceSetInput2.getUniqueCategoryName();
          if (this.isMultiSelect) {
            return this.renderCompoundInput("ac-choiceSetInput-multiSelect", "checkbox", this.defaultValue ? this.defaultValue.split(this.hostConfig.choiceSetInputValueSeparator) : void 0);
          } else {
            if (this.style === "expanded") {
              return this.renderCompoundInput("ac-choiceSetInput-expanded", "radio", this.defaultValue ? [this.defaultValue] : void 0);
            } else if (this.style === "filtered") {
              var inputContainer = document.createElement("div");
              inputContainer.style.width = "100%";
              this._textInput = document.createElement("input");
              this._textInput.className = this.hostConfig.makeCssClassName("ac-input", "ac-multichoiceInput", "ac-choiceSetInput-filtered");
              this._textInput.type = "text";
              this._textInput.style.width = "100%";
              this._textInput.oninput = function() {
                _this.valueChanged();
                if (_this._textInput) {
                  if (_this.value) {
                    _this._textInput.removeAttribute("placeholder");
                    _this._textInput.removeAttribute("aria-label");
                  } else if (_this.placeholder) {
                    _this._textInput.placeholder = _this.placeholder;
                    _this._textInput.setAttribute("aria-label", _this.placeholder);
                  }
                }
              };
              if (this.defaultValue) {
                this._textInput.value = this.defaultValue;
              }
              if (this.placeholder && !this._textInput.value) {
                this._textInput.placeholder = this.placeholder;
                this._textInput.setAttribute("aria-label", this.placeholder);
              }
              this._textInput.tabIndex = this.isDesignMode() ? -1 : 0;
              var dataList = document.createElement("datalist");
              dataList.id = Utils.generateUniqueId();
              for (var _i = 0, _a = this.choices; _i < _a.length; _i++) {
                var choice = _a[_i];
                var option = document.createElement("option");
                if (choice.title) {
                  option.value = choice.title;
                  option.setAttribute("aria-label", choice.title);
                }
                option.tabIndex = this.isDesignMode() ? -1 : 0;
                dataList.appendChild(option);
              }
              this._textInput.setAttribute("list", dataList.id);
              inputContainer.append(this._textInput, dataList);
              return inputContainer;
            } else {
              this._selectElement = document.createElement("select");
              this._selectElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-multichoiceInput", "ac-choiceSetInput-compact");
              this._selectElement.style.width = "100%";
              this._selectElement.tabIndex = this.isDesignMode() ? -1 : 0;
              var placeholderOption = document.createElement("option");
              placeholderOption.selected = true;
              placeholderOption.disabled = true;
              placeholderOption.hidden = true;
              placeholderOption.value = "";
              if (this.placeholder) {
                placeholderOption.text = this.placeholder;
              }
              Utils.appendChild(this._selectElement, placeholderOption);
              for (var _b = 0, _c = this.choices; _b < _c.length; _b++) {
                var choice = _c[_b];
                var option = document.createElement("option");
                option.value = choice.value;
                if (choice.title) {
                  option.text = choice.title;
                  option.setAttribute("aria-label", choice.title);
                }
                option.tabIndex = this.isDesignMode() ? -1 : 0;
                if (choice.value === this.defaultValue) {
                  option.selected = true;
                }
                Utils.appendChild(this._selectElement, option);
              }
              this._selectElement.onchange = function() {
                _this.internalApplyAriaCurrent();
                _this.valueChanged();
              };
              this.internalApplyAriaCurrent();
              return this._selectElement;
            }
          }
        };
        ChoiceSetInput2.prototype.getJsonTypeName = function() {
          return "Input.ChoiceSet";
        };
        ChoiceSetInput2.prototype.focus = function() {
          if (this._toggleInputs && (this.isMultiSelect || this.style === "expanded")) {
            if (this._toggleInputs.length > 0) {
              this._toggleInputs[0].focus();
            }
          } else if (this._textInput) {
            this._textInput.focus();
          } else {
            _super.prototype.focus.call(this);
          }
        };
        ChoiceSetInput2.prototype.internalValidateProperties = function(context) {
          _super.prototype.internalValidateProperties.call(this, context);
          if (this.choices.length === 0) {
            context.addFailure(this, Enums.ValidationEvent.CollectionCantBeEmpty, strings_1.Strings.errors.choiceSetMustHaveAtLeastOneChoice());
          }
          for (var _i = 0, _a = this.choices; _i < _a.length; _i++) {
            var choice = _a[_i];
            if (!choice.title || !choice.value) {
              context.addFailure(this, Enums.ValidationEvent.PropertyCantBeNull, strings_1.Strings.errors.choiceSetChoicesMustHaveTitleAndValue());
            }
          }
        };
        ChoiceSetInput2.prototype.isSet = function() {
          return this.value ? true : false;
        };
        ChoiceSetInput2.prototype.isValid = function() {
          if (this._textInput) {
            if (this.value === "" || this.value === this.placeholder) {
              return true;
            }
            for (var _i = 0, _a = this.choices; _i < _a.length; _i++) {
              var choice = _a[_i];
              if (this.value === choice.value) {
                return true;
              }
            }
            return false;
          }
          return _super.prototype.isValid.call(this);
        };
        Object.defineProperty(ChoiceSetInput2.prototype, "value", {
          get: function() {
            if (!this.isMultiSelect) {
              if (this._selectElement) {
                return this._selectElement.selectedIndex > 0 ? this._selectElement.value : void 0;
              } else if (this._textInput) {
                for (var _i = 0, _a = this.choices; _i < _a.length; _i++) {
                  var choice = _a[_i];
                  if (choice.title && this._textInput.value === choice.title) {
                    return choice.value;
                  }
                }
                return this._textInput.value;
              } else if (this._toggleInputs && this._toggleInputs.length > 0) {
                for (var _b = 0, _c = this._toggleInputs; _b < _c.length; _b++) {
                  var toggleInput = _c[_b];
                  if (toggleInput.checked) {
                    return toggleInput.value;
                  }
                }
              }
              return void 0;
            } else {
              if (!this._toggleInputs || this._toggleInputs.length === 0) {
                return void 0;
              }
              var result = "";
              for (var _d = 0, _f = this._toggleInputs; _d < _f.length; _d++) {
                var toggleInput = _f[_d];
                if (toggleInput.checked) {
                  if (result !== "") {
                    result += this.hostConfig.choiceSetInputValueSeparator;
                  }
                  result += toggleInput.value;
                }
              }
              return result ? result : void 0;
            }
          },
          enumerable: false,
          configurable: true
        });
        ChoiceSetInput2.valueProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "value");
        ChoiceSetInput2.choicesProperty = new serialization_1.SerializableObjectCollectionProperty(serialization_1.Versions.v1_0, "choices", Choice);
        ChoiceSetInput2.styleProperty = new serialization_1.ValueSetProperty(serialization_1.Versions.v1_0, "style", [
          { value: "compact" },
          { value: "expanded" },
          { value: "filtered", targetVersion: serialization_1.Versions.v1_5 }
        ], "compact");
        ChoiceSetInput2.isMultiSelectProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_0, "isMultiSelect", false);
        ChoiceSetInput2.placeholderProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "placeholder");
        ChoiceSetInput2.wrapProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_2, "wrap", false);
        ChoiceSetInput2._uniqueCategoryCounter = 0;
        __decorate([
          (0, serialization_1.property)(ChoiceSetInput2.valueProperty)
        ], ChoiceSetInput2.prototype, "defaultValue", void 0);
        __decorate([
          (0, serialization_1.property)(ChoiceSetInput2.styleProperty)
        ], ChoiceSetInput2.prototype, "style", void 0);
        __decorate([
          (0, serialization_1.property)(ChoiceSetInput2.isMultiSelectProperty)
        ], ChoiceSetInput2.prototype, "isMultiSelect", void 0);
        __decorate([
          (0, serialization_1.property)(ChoiceSetInput2.placeholderProperty)
        ], ChoiceSetInput2.prototype, "placeholder", void 0);
        __decorate([
          (0, serialization_1.property)(ChoiceSetInput2.wrapProperty)
        ], ChoiceSetInput2.prototype, "wrap", void 0);
        __decorate([
          (0, serialization_1.property)(ChoiceSetInput2.choicesProperty)
        ], ChoiceSetInput2.prototype, "choices", void 0);
        return ChoiceSetInput2;
      }(Input)
    );
    exports.ChoiceSetInput = ChoiceSetInput;
    var NumberInput = (
      /** @class */
      function(_super) {
        __extends(NumberInput2, _super);
        function NumberInput2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        NumberInput2.prototype.internalRender = function() {
          var _this = this;
          this._numberInputElement = document.createElement("input");
          this._numberInputElement.setAttribute("type", "number");
          if (this.min !== void 0) {
            this._numberInputElement.setAttribute("min", this.min.toString());
          }
          if (this.max !== void 0) {
            this._numberInputElement.setAttribute("max", this.max.toString());
          }
          this._numberInputElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-numberInput");
          this._numberInputElement.style.width = "100%";
          this._numberInputElement.tabIndex = this.isDesignMode() ? -1 : 0;
          if (this.defaultValue !== void 0) {
            this._numberInputElement.valueAsNumber = this.defaultValue;
          }
          if (this.placeholder) {
            this._numberInputElement.placeholder = this.placeholder;
            this._numberInputElement.setAttribute("aria-label", this.placeholder);
          }
          this._numberInputElement.oninput = function() {
            _this.valueChanged();
          };
          return this._numberInputElement;
        };
        NumberInput2.prototype.getJsonTypeName = function() {
          return "Input.Number";
        };
        NumberInput2.prototype.isSet = function() {
          return this.value !== void 0 && !isNaN(this.value);
        };
        NumberInput2.prototype.isValid = function() {
          if (this.value === void 0) {
            return !this.isRequired;
          }
          var result = true;
          if (this.min !== void 0) {
            result = result && this.value >= this.min;
          }
          if (this.max !== void 0) {
            result = result && this.value <= this.max;
          }
          return result;
        };
        Object.defineProperty(NumberInput2.prototype, "value", {
          get: function() {
            return this._numberInputElement ? this._numberInputElement.valueAsNumber : void 0;
          },
          set: function(value) {
            if (value && this._numberInputElement) {
              this._numberInputElement.value = value.toString();
            }
          },
          enumerable: false,
          configurable: true
        });
        NumberInput2.valueProperty = new serialization_1.NumProperty(serialization_1.Versions.v1_0, "value");
        NumberInput2.placeholderProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "placeholder");
        NumberInput2.minProperty = new serialization_1.NumProperty(serialization_1.Versions.v1_0, "min");
        NumberInput2.maxProperty = new serialization_1.NumProperty(serialization_1.Versions.v1_0, "max");
        __decorate([
          (0, serialization_1.property)(NumberInput2.valueProperty)
        ], NumberInput2.prototype, "defaultValue", void 0);
        __decorate([
          (0, serialization_1.property)(NumberInput2.minProperty)
        ], NumberInput2.prototype, "min", void 0);
        __decorate([
          (0, serialization_1.property)(NumberInput2.maxProperty)
        ], NumberInput2.prototype, "max", void 0);
        __decorate([
          (0, serialization_1.property)(NumberInput2.placeholderProperty)
        ], NumberInput2.prototype, "placeholder", void 0);
        return NumberInput2;
      }(Input)
    );
    exports.NumberInput = NumberInput;
    var DateInput = (
      /** @class */
      function(_super) {
        __extends(DateInput2, _super);
        function DateInput2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        DateInput2.prototype.internalRender = function() {
          var _this = this;
          this._dateInputElement = document.createElement("input");
          this._dateInputElement.setAttribute("type", "date");
          if (this.min) {
            this._dateInputElement.setAttribute("min", this.min);
          }
          if (this.max) {
            this._dateInputElement.setAttribute("max", this.max);
          }
          if (this.placeholder) {
            this._dateInputElement.placeholder = this.placeholder;
            this._dateInputElement.setAttribute("aria-label", this.placeholder);
          }
          this._dateInputElement.tabIndex = this.isDesignMode() ? -1 : 0;
          this._dateInputElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-dateInput");
          this._dateInputElement.style.width = "100%";
          this._dateInputElement.oninput = function() {
            _this.valueChanged();
          };
          if (this.defaultValue) {
            this._dateInputElement.value = this.defaultValue;
          }
          return this._dateInputElement;
        };
        DateInput2.prototype.getJsonTypeName = function() {
          return "Input.Date";
        };
        DateInput2.prototype.isSet = function() {
          return this.value ? true : false;
        };
        DateInput2.prototype.isValid = function() {
          if (!this.value) {
            return !this.isRequired;
          }
          var valueAsDate = new Date(this.value);
          var result = true;
          if (this.min) {
            var minDate = new Date(this.min);
            result = result && valueAsDate >= minDate;
          }
          if (this.max) {
            var maxDate = new Date(this.max);
            result = result && valueAsDate <= maxDate;
          }
          return result;
        };
        Object.defineProperty(DateInput2.prototype, "value", {
          get: function() {
            return this._dateInputElement ? this._dateInputElement.value : void 0;
          },
          enumerable: false,
          configurable: true
        });
        DateInput2.valueProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "value");
        DateInput2.placeholderProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "placeholder");
        DateInput2.minProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "min");
        DateInput2.maxProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "max");
        __decorate([
          (0, serialization_1.property)(DateInput2.valueProperty)
        ], DateInput2.prototype, "defaultValue", void 0);
        __decorate([
          (0, serialization_1.property)(DateInput2.minProperty)
        ], DateInput2.prototype, "min", void 0);
        __decorate([
          (0, serialization_1.property)(DateInput2.maxProperty)
        ], DateInput2.prototype, "max", void 0);
        __decorate([
          (0, serialization_1.property)(DateInput2.placeholderProperty)
        ], DateInput2.prototype, "placeholder", void 0);
        return DateInput2;
      }(Input)
    );
    exports.DateInput = DateInput;
    var TimeProperty = (
      /** @class */
      function(_super) {
        __extends(TimeProperty2, _super);
        function TimeProperty2(targetVersion, name) {
          var _this = _super.call(this, targetVersion, name, function(sender, prop, source, context) {
            var value = source[prop.name];
            if (typeof value === "string" && value && /^[0-9]{2}:[0-9]{2}$/.test(value)) {
              return value;
            }
            return void 0;
          }, function(sender, prop, target, value, context) {
            context.serializeValue(target, prop.name, value);
          }) || this;
          _this.targetVersion = targetVersion;
          _this.name = name;
          return _this;
        }
        return TimeProperty2;
      }(serialization_1.CustomProperty)
    );
    exports.TimeProperty = TimeProperty;
    var TimeInput = (
      /** @class */
      function(_super) {
        __extends(TimeInput2, _super);
        function TimeInput2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        TimeInput2.convertTimeStringToDate = function(timeString) {
          return /* @__PURE__ */ new Date("1973-09-04T" + timeString + ":00Z");
        };
        TimeInput2.prototype.internalRender = function() {
          var _this = this;
          this._timeInputElement = document.createElement("input");
          this._timeInputElement.setAttribute("type", "time");
          if (this.min) {
            this._timeInputElement.setAttribute("min", this.min);
          }
          if (this.max) {
            this._timeInputElement.setAttribute("max", this.max);
          }
          this._timeInputElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-timeInput");
          this._timeInputElement.style.width = "100%";
          this._timeInputElement.oninput = function() {
            _this.valueChanged();
          };
          if (this.placeholder) {
            this._timeInputElement.placeholder = this.placeholder;
            this._timeInputElement.setAttribute("aria-label", this.placeholder);
          }
          this._timeInputElement.tabIndex = this.isDesignMode() ? -1 : 0;
          if (this.defaultValue) {
            this._timeInputElement.value = this.defaultValue;
          }
          return this._timeInputElement;
        };
        TimeInput2.prototype.getJsonTypeName = function() {
          return "Input.Time";
        };
        TimeInput2.prototype.isSet = function() {
          return this.value ? true : false;
        };
        TimeInput2.prototype.isValid = function() {
          if (!this.value) {
            return !this.isRequired;
          }
          var valueAsDate = TimeInput2.convertTimeStringToDate(this.value);
          var result = true;
          if (this.min) {
            var minDate = TimeInput2.convertTimeStringToDate(this.min);
            result = result && valueAsDate >= minDate;
          }
          if (this.max) {
            var maxDate = TimeInput2.convertTimeStringToDate(this.max);
            result = result && valueAsDate <= maxDate;
          }
          return result;
        };
        Object.defineProperty(TimeInput2.prototype, "value", {
          get: function() {
            return this._timeInputElement ? this._timeInputElement.value : void 0;
          },
          enumerable: false,
          configurable: true
        });
        TimeInput2.valueProperty = new TimeProperty(serialization_1.Versions.v1_0, "value");
        TimeInput2.placeholderProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "placeholder");
        TimeInput2.minProperty = new TimeProperty(serialization_1.Versions.v1_0, "min");
        TimeInput2.maxProperty = new TimeProperty(serialization_1.Versions.v1_0, "max");
        __decorate([
          (0, serialization_1.property)(TimeInput2.valueProperty)
        ], TimeInput2.prototype, "defaultValue", void 0);
        __decorate([
          (0, serialization_1.property)(TimeInput2.minProperty)
        ], TimeInput2.prototype, "min", void 0);
        __decorate([
          (0, serialization_1.property)(TimeInput2.maxProperty)
        ], TimeInput2.prototype, "max", void 0);
        __decorate([
          (0, serialization_1.property)(TimeInput2.placeholderProperty)
        ], TimeInput2.prototype, "placeholder", void 0);
        return TimeInput2;
      }(Input)
    );
    exports.TimeInput = TimeInput;
    var Action = (
      /** @class */
      function(_super) {
        __extends(Action2, _super);
        function Action2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.style = Enums.ActionStyle.Default;
          _this.mode = Enums.ActionMode.Primary;
          _this._state = 0;
          _this._isFocusable = true;
          return _this;
        }
        Action2.prototype.renderButtonContent = function() {
          if (this.renderedElement) {
            var hostConfig = this.hostConfig;
            var titleElement = document.createElement("div");
            titleElement.style.overflow = "hidden";
            titleElement.style.textOverflow = "ellipsis";
            if (!(hostConfig.actions.iconPlacement === Enums.ActionIconPlacement.AboveTitle || hostConfig.actions.allowTitleToWrap)) {
              titleElement.style.whiteSpace = "nowrap";
            }
            if (this.title) {
              titleElement.innerText = this.title;
            }
            if (!this.iconUrl) {
              this.renderedElement.classList.add("noIcon");
              this.renderedElement.appendChild(titleElement);
            } else {
              var iconElement = document.createElement("img");
              iconElement.src = this.iconUrl;
              iconElement.style.width = hostConfig.actions.iconSize + "px";
              iconElement.style.height = hostConfig.actions.iconSize + "px";
              iconElement.style.flex = "0 0 auto";
              if (hostConfig.actions.iconPlacement === Enums.ActionIconPlacement.AboveTitle) {
                this.renderedElement.classList.add("iconAbove");
                this.renderedElement.style.flexDirection = "column";
                if (this.title) {
                  iconElement.style.marginBottom = "6px";
                }
              } else {
                this.renderedElement.classList.add("iconLeft");
                iconElement.style.maxHeight = "100%";
                if (this.title) {
                  iconElement.style.marginRight = "6px";
                }
              }
              this.renderedElement.appendChild(iconElement);
              this.renderedElement.appendChild(titleElement);
            }
          }
        };
        Action2.prototype.getParentContainer = function() {
          if (this.parent instanceof Container) {
            return this.parent;
          }
          return this.parent ? this.parent.getParentContainer() : void 0;
        };
        Action2.prototype.isDesignMode = function() {
          var rootElement = this.getRootObject();
          return rootElement instanceof CardElement && rootElement.isDesignMode();
        };
        Action2.prototype.updateCssClasses = function() {
          var _a, _b;
          if (this.parent && this.renderedElement) {
            var hostConfig = this.parent.hostConfig;
            this.renderedElement.className = hostConfig.makeCssClassName(this.isEffectivelyEnabled() ? "ac-pushButton" : "ac-pushButton-disabled");
            var parentContainer = this.getParentContainer();
            if (parentContainer) {
              var parentContainerStyle = parentContainer.getEffectiveStyle();
              if (parentContainerStyle) {
                this.renderedElement.classList.add("style-" + parentContainerStyle);
              }
            }
            this.renderedElement.tabIndex = !this.isDesignMode() && this.isFocusable ? 0 : -1;
            switch (this._state) {
              case 0:
                break;
              case 1:
                this.renderedElement.classList.add(hostConfig.makeCssClassName("expanded"));
                break;
              case 2:
                this.renderedElement.classList.add(hostConfig.makeCssClassName("subdued"));
                break;
            }
            if (this.style && this.isEffectivelyEnabled()) {
              if (this.style === Enums.ActionStyle.Positive) {
                (_a = this.renderedElement.classList).add.apply(_a, hostConfig.makeCssClassNames("primary", "style-positive"));
              } else {
                (_b = this.renderedElement.classList).add.apply(_b, hostConfig.makeCssClassNames("style-" + this.style.toLowerCase()));
              }
            }
          }
        };
        Action2.prototype.getDefaultSerializationContext = function() {
          return new SerializationContext();
        };
        Action2.prototype.internalGetReferencedInputs = function() {
          return {};
        };
        Action2.prototype.internalPrepareForExecution = function(_inputs) {
        };
        Action2.prototype.internalValidateInputs = function(referencedInputs) {
          var result = [];
          if (referencedInputs) {
            for (var _i = 0, _a = Object.keys(referencedInputs); _i < _a.length; _i++) {
              var key = _a[_i];
              var input = referencedInputs[key];
              if (!input.validateValue()) {
                result.push(input);
              }
            }
          }
          return result;
        };
        Action2.prototype.shouldSerialize = function(context) {
          return context.actionRegistry.findByName(this.getJsonTypeName()) !== void 0;
        };
        Action2.prototype.raiseExecuteActionEvent = function() {
          if (this.onExecute) {
            this.onExecute(this);
          }
          raiseExecuteActionEvent(this);
        };
        Action2.prototype.internalAfterExecute = function() {
          var rootObject = this.getRootObject();
          if (rootObject instanceof CardElement) {
            rootObject.updateActionsEnabledState();
          }
        };
        Action2.prototype.getHref = function() {
          return "";
        };
        Action2.prototype.getAriaRole = function() {
          return "button";
        };
        Action2.prototype.setupElementForAccessibility = function(element, promoteTooltipToLabel) {
          if (promoteTooltipToLabel === void 0) {
            promoteTooltipToLabel = false;
          }
          element.tabIndex = this.isEffectivelyEnabled() && !this.isDesignMode() ? 0 : -1;
          element.setAttribute("role", this.getAriaRole());
          if (element instanceof HTMLButtonElement) {
            element.disabled = !this.isEffectivelyEnabled();
          }
          if (!this.isEffectivelyEnabled()) {
            element.setAttribute("aria-disabled", "true");
          } else {
            element.removeAttribute("aria-disabled");
            element.classList.add(this.hostConfig.makeCssClassName("ac-selectable"));
          }
          if (this.title) {
            element.setAttribute("aria-label", this.title);
            element.title = this.title;
          } else {
            element.removeAttribute("aria-label");
            element.removeAttribute("title");
          }
          if (this.tooltip) {
            var targetAriaAttribute = promoteTooltipToLabel ? this.title ? "aria-description" : "aria-label" : "aria-description";
            element.setAttribute(targetAriaAttribute, this.tooltip);
            element.title = this.tooltip;
          }
        };
        Action2.prototype.parse = function(source, context) {
          return _super.prototype.parse.call(this, source, context ? context : new SerializationContext());
        };
        Action2.prototype.render = function() {
          var _this = this;
          var buttonElement = document.createElement("button");
          buttonElement.type = "button";
          buttonElement.style.display = "flex";
          buttonElement.style.alignItems = "center";
          buttonElement.style.justifyContent = "center";
          buttonElement.onclick = function(e) {
            if (_this.isEffectivelyEnabled()) {
              e.preventDefault();
              e.cancelBubble = true;
              _this.execute();
            }
          };
          this._renderedElement = buttonElement;
          this.renderButtonContent();
          this.updateCssClasses();
          this.setupElementForAccessibility(buttonElement);
        };
        Action2.prototype.execute = function() {
          if (this._actionCollection) {
            this._actionCollection.actionExecuted(this);
          }
          this.raiseExecuteActionEvent();
          this.internalAfterExecute();
        };
        Action2.prototype.prepareForExecution = function() {
          var referencedInputs = this.getReferencedInputs();
          var invalidInputs = this.internalValidateInputs(referencedInputs);
          if (invalidInputs.length > 0) {
            invalidInputs[0].focus();
            return false;
          }
          this.internalPrepareForExecution(referencedInputs);
          return true;
        };
        Action2.prototype.remove = function() {
          if (this._actionCollection) {
            return this._actionCollection.removeAction(this);
          }
          return false;
        };
        Action2.prototype.getAllInputs = function(processActions) {
          if (processActions === void 0) {
            processActions = true;
          }
          return [];
        };
        Action2.prototype.getAllActions = function() {
          return [this];
        };
        Action2.prototype.getResourceInformation = function() {
          return this.iconUrl ? [{ url: this.iconUrl, mimeType: "image" }] : [];
        };
        Action2.prototype.getActionById = function(id) {
          return this.id === id ? this : void 0;
        };
        Action2.prototype.getReferencedInputs = function() {
          return this.internalGetReferencedInputs();
        };
        Action2.prototype.validateInputs = function() {
          return this.internalValidateInputs(this.getReferencedInputs());
        };
        Action2.prototype.updateEnabledState = function() {
        };
        Action2.prototype.isEffectivelyEnabled = function() {
          return this.isEnabled;
        };
        Object.defineProperty(Action2.prototype, "isPrimary", {
          get: function() {
            return this.style === Enums.ActionStyle.Positive;
          },
          set: function(value) {
            if (value) {
              this.style = Enums.ActionStyle.Positive;
            } else {
              if (this.style === Enums.ActionStyle.Positive) {
                this.style = Enums.ActionStyle.Default;
              }
            }
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Action2.prototype, "hostConfig", {
          get: function() {
            return this.parent ? this.parent.hostConfig : host_config_1.defaultHostConfig;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Action2.prototype, "parent", {
          get: function() {
            return this._parent;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Action2.prototype, "state", {
          get: function() {
            return this._state;
          },
          set: function(value) {
            if (this._state !== value) {
              this._state = value;
              this.updateCssClasses();
            }
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Action2.prototype, "isFocusable", {
          get: function() {
            return this._isFocusable;
          },
          set: function(value) {
            if (this._isFocusable !== value) {
              this._isFocusable = value;
              this.updateCssClasses();
            }
          },
          enumerable: false,
          configurable: true
        });
        Action2.titleProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "title");
        Action2.iconUrlProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_1, "iconUrl");
        Action2.styleProperty = new serialization_1.ValueSetProperty(serialization_1.Versions.v1_2, "style", [
          { value: Enums.ActionStyle.Default },
          { value: Enums.ActionStyle.Positive },
          { value: Enums.ActionStyle.Destructive }
        ], Enums.ActionStyle.Default);
        Action2.modeProperty = new serialization_1.ValueSetProperty(serialization_1.Versions.v1_5, "mode", [{ value: Enums.ActionMode.Primary }, { value: Enums.ActionMode.Secondary }], Enums.ActionMode.Primary);
        Action2.tooltipProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_5, "tooltip");
        Action2.isEnabledProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_5, "isEnabled", true);
        __decorate([
          (0, serialization_1.property)(Action2.titleProperty)
        ], Action2.prototype, "title", void 0);
        __decorate([
          (0, serialization_1.property)(Action2.iconUrlProperty)
        ], Action2.prototype, "iconUrl", void 0);
        __decorate([
          (0, serialization_1.property)(Action2.styleProperty)
        ], Action2.prototype, "style", void 0);
        __decorate([
          (0, serialization_1.property)(Action2.modeProperty)
        ], Action2.prototype, "mode", void 0);
        __decorate([
          (0, serialization_1.property)(Action2.tooltipProperty)
        ], Action2.prototype, "tooltip", void 0);
        __decorate([
          (0, serialization_1.property)(Action2.isEnabledProperty)
        ], Action2.prototype, "isEnabled", void 0);
        return Action2;
      }(card_object_1.CardObject)
    );
    exports.Action = Action;
    var SubmitActionBase = (
      /** @class */
      function(_super) {
        __extends(SubmitActionBase2, _super);
        function SubmitActionBase2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.disabledUnlessAssociatedInputsChange = false;
          _this._isPrepared = false;
          _this._areReferencedInputsDirty = false;
          return _this;
        }
        SubmitActionBase2.prototype.internalGetReferencedInputs = function() {
          var result = {};
          if (this.associatedInputs !== "none") {
            var current = this.parent;
            var inputs = [];
            while (current) {
              inputs.push.apply(inputs, current.getAllInputs(false));
              current = current.parent;
            }
            for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
              var input = inputs_1[_i];
              if (input.id) {
                result[input.id] = input;
              }
            }
          }
          return result;
        };
        SubmitActionBase2.prototype.internalPrepareForExecution = function(inputs) {
          if (this._originalData) {
            this._processedData = JSON.parse(JSON.stringify(this._originalData));
          } else {
            this._processedData = {};
          }
          if (this._processedData && inputs) {
            for (var _i = 0, _a = Object.keys(inputs); _i < _a.length; _i++) {
              var key = _a[_i];
              var input = inputs[key];
              if (input.id && input.isSet()) {
                this._processedData[input.id] = typeof input.value === "string" ? input.value : input.value.toString();
              }
            }
          }
          this._isPrepared = true;
        };
        SubmitActionBase2.prototype.internalAfterExecute = function() {
          if (shared_1.GlobalSettings.resetInputsDirtyStateAfterActionExecution) {
            this.resetReferencedInputsDirtyState();
          }
        };
        SubmitActionBase2.prototype.resetReferencedInputsDirtyState = function() {
          var referencedInputs = this.getReferencedInputs();
          this._areReferencedInputsDirty = false;
          if (referencedInputs) {
            for (var _i = 0, _a = Object.keys(referencedInputs); _i < _a.length; _i++) {
              var key = _a[_i];
              var input = referencedInputs[key];
              input.resetDirtyState();
            }
          }
        };
        SubmitActionBase2.prototype.updateEnabledState = function() {
          this._areReferencedInputsDirty = false;
          var referencedInputs = this.getReferencedInputs();
          if (referencedInputs) {
            for (var _i = 0, _a = Object.keys(referencedInputs); _i < _a.length; _i++) {
              var key = _a[_i];
              var input = referencedInputs[key];
              if (input.isDirty()) {
                this._areReferencedInputsDirty = true;
                break;
              }
            }
          }
          this.updateCssClasses();
          if (this._renderedElement) {
            this.setupElementForAccessibility(this._renderedElement);
          }
        };
        SubmitActionBase2.prototype.isEffectivelyEnabled = function() {
          var result = _super.prototype.isEffectivelyEnabled.call(this);
          return this.disabledUnlessAssociatedInputsChange ? result && this._areReferencedInputsDirty : result;
        };
        Object.defineProperty(SubmitActionBase2.prototype, "data", {
          get: function() {
            return this._isPrepared ? this._processedData : this._originalData;
          },
          set: function(value) {
            this._originalData = value;
            this._isPrepared = false;
          },
          enumerable: false,
          configurable: true
        });
        SubmitActionBase2.dataProperty = new serialization_1.PropertyDefinition(serialization_1.Versions.v1_0, "data");
        SubmitActionBase2.associatedInputsProperty = new serialization_1.CustomProperty(serialization_1.Versions.v1_3, "associatedInputs", function(sender, prop, source, context) {
          var value = source[prop.name];
          if (value !== void 0 && typeof value === "string") {
            return value.toLowerCase() === "none" ? "none" : "auto";
          }
          return void 0;
        }, function(sender, prop, target, value, context) {
          context.serializeValue(target, prop.name, value);
        });
        SubmitActionBase2.disabledUnlessAssociatedInputsChangeProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_6, "disabledUnlessAssociatedInputsChange", false);
        __decorate([
          (0, serialization_1.property)(SubmitActionBase2.dataProperty)
        ], SubmitActionBase2.prototype, "_originalData", void 0);
        __decorate([
          (0, serialization_1.property)(SubmitActionBase2.associatedInputsProperty)
        ], SubmitActionBase2.prototype, "associatedInputs", void 0);
        __decorate([
          (0, serialization_1.property)(SubmitActionBase2.disabledUnlessAssociatedInputsChangeProperty)
        ], SubmitActionBase2.prototype, "disabledUnlessAssociatedInputsChange", void 0);
        return SubmitActionBase2;
      }(Action)
    );
    exports.SubmitActionBase = SubmitActionBase;
    var SubmitAction = (
      /** @class */
      function(_super) {
        __extends(SubmitAction2, _super);
        function SubmitAction2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        SubmitAction2.prototype.getJsonTypeName = function() {
          return SubmitAction2.JsonTypeName;
        };
        SubmitAction2.JsonTypeName = "Action.Submit";
        return SubmitAction2;
      }(SubmitActionBase)
    );
    exports.SubmitAction = SubmitAction;
    var ExecuteAction = (
      /** @class */
      function(_super) {
        __extends(ExecuteAction2, _super);
        function ExecuteAction2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        ExecuteAction2.prototype.getJsonTypeName = function() {
          return ExecuteAction2.JsonTypeName;
        };
        ExecuteAction2.JsonTypeName = "Action.Execute";
        ExecuteAction2.verbProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_4, "verb");
        __decorate([
          (0, serialization_1.property)(ExecuteAction2.verbProperty)
        ], ExecuteAction2.prototype, "verb", void 0);
        return ExecuteAction2;
      }(SubmitActionBase)
    );
    exports.ExecuteAction = ExecuteAction;
    var OpenUrlAction = (
      /** @class */
      function(_super) {
        __extends(OpenUrlAction2, _super);
        function OpenUrlAction2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        OpenUrlAction2.prototype.getJsonTypeName = function() {
          return OpenUrlAction2.JsonTypeName;
        };
        OpenUrlAction2.prototype.getAriaRole = function() {
          return "link";
        };
        OpenUrlAction2.prototype.internalValidateProperties = function(context) {
          _super.prototype.internalValidateProperties.call(this, context);
          if (!this.url) {
            context.addFailure(this, Enums.ValidationEvent.PropertyCantBeNull, strings_1.Strings.errors.propertyMustBeSet("url"));
          }
        };
        OpenUrlAction2.prototype.getHref = function() {
          return this.url;
        };
        OpenUrlAction2.urlProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "url");
        OpenUrlAction2.JsonTypeName = "Action.OpenUrl";
        __decorate([
          (0, serialization_1.property)(OpenUrlAction2.urlProperty)
        ], OpenUrlAction2.prototype, "url", void 0);
        return OpenUrlAction2;
      }(Action)
    );
    exports.OpenUrlAction = OpenUrlAction;
    var ToggleVisibilityAction = (
      /** @class */
      function(_super) {
        __extends(ToggleVisibilityAction2, _super);
        function ToggleVisibilityAction2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.targetElements = {};
          return _this;
        }
        ToggleVisibilityAction2.prototype.updateAriaControlsAttribute = function() {
          if (this.targetElements) {
            var elementIds = Object.keys(this.targetElements);
            if (this._renderedElement) {
              if (elementIds.length > 0) {
                this._renderedElement.setAttribute("aria-controls", elementIds.join(" "));
              } else {
                this._renderedElement.removeAttribute("aria-controls");
              }
            }
          }
        };
        ToggleVisibilityAction2.prototype.internalValidateProperties = function(context) {
          _super.prototype.internalValidateProperties.call(this, context);
          if (!this.targetElements) {
            context.addFailure(this, Enums.ValidationEvent.PropertyCantBeNull, strings_1.Strings.errors.propertyMustBeSet("targetElements"));
          }
        };
        ToggleVisibilityAction2.prototype.getJsonTypeName = function() {
          return ToggleVisibilityAction2.JsonTypeName;
        };
        ToggleVisibilityAction2.prototype.render = function() {
          _super.prototype.render.call(this);
          this.updateAriaControlsAttribute();
        };
        ToggleVisibilityAction2.prototype.execute = function() {
          _super.prototype.execute.call(this);
          if (this.parent) {
            for (var _i = 0, _a = Object.keys(this.targetElements); _i < _a.length; _i++) {
              var elementId = _a[_i];
              var targetElement = this.parent.getRootElement().getElementById(elementId);
              if (targetElement) {
                if (typeof this.targetElements[elementId] === "boolean") {
                  targetElement.isVisible = this.targetElements[elementId];
                } else {
                  targetElement.isVisible = !targetElement.isVisible;
                }
              }
            }
          }
        };
        ToggleVisibilityAction2.prototype.addTargetElement = function(elementId, isVisible) {
          if (isVisible === void 0) {
            isVisible = void 0;
          }
          this.targetElements[elementId] = isVisible;
          this.updateAriaControlsAttribute();
        };
        ToggleVisibilityAction2.prototype.removeTargetElement = function(elementId) {
          delete this.targetElements[elementId];
          this.updateAriaControlsAttribute();
        };
        ToggleVisibilityAction2.targetElementsProperty = new serialization_1.CustomProperty(serialization_1.Versions.v1_2, "targetElements", function(sender, prop, source, context) {
          var result = {};
          if (Array.isArray(source[prop.name])) {
            for (var _i = 0, _a = source[prop.name]; _i < _a.length; _i++) {
              var item = _a[_i];
              if (typeof item === "string") {
                result[item] = void 0;
              } else if (typeof item === "object") {
                var elementId = item["elementId"];
                if (typeof elementId === "string") {
                  result[elementId] = Utils.parseBool(item["isVisible"]);
                }
              }
            }
          }
          return result;
        }, function(sender, prop, target, value, context) {
          var targetElements = [];
          for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
            var id = _a[_i];
            if (typeof value[id] === "boolean") {
              targetElements.push({
                elementId: id,
                isVisible: value[id]
              });
            } else {
              targetElements.push(id);
            }
          }
          context.serializeArray(target, prop.name, targetElements);
        }, {}, function(sender) {
          return {};
        });
        ToggleVisibilityAction2.JsonTypeName = "Action.ToggleVisibility";
        __decorate([
          (0, serialization_1.property)(ToggleVisibilityAction2.targetElementsProperty)
        ], ToggleVisibilityAction2.prototype, "targetElements", void 0);
        return ToggleVisibilityAction2;
      }(Action)
    );
    exports.ToggleVisibilityAction = ToggleVisibilityAction;
    var StringWithSubstitutionProperty = (
      /** @class */
      function(_super) {
        __extends(StringWithSubstitutionProperty2, _super);
        function StringWithSubstitutionProperty2(targetVersion, name) {
          var _this = _super.call(this, targetVersion, name, void 0, function() {
            return new shared_1.StringWithSubstitutions();
          }) || this;
          _this.targetVersion = targetVersion;
          _this.name = name;
          return _this;
        }
        StringWithSubstitutionProperty2.prototype.parse = function(sender, source, context) {
          var result = new shared_1.StringWithSubstitutions();
          result.set(Utils.parseString(source[this.name]));
          return result;
        };
        StringWithSubstitutionProperty2.prototype.toJSON = function(sender, target, value, context) {
          context.serializeValue(target, this.name, value.getOriginal());
        };
        return StringWithSubstitutionProperty2;
      }(serialization_1.PropertyDefinition)
    );
    var HttpHeader = (
      /** @class */
      function(_super) {
        __extends(HttpHeader2, _super);
        function HttpHeader2(name, value) {
          if (name === void 0) {
            name = "";
          }
          if (value === void 0) {
            value = "";
          }
          var _this = _super.call(this) || this;
          _this.name = name;
          _this.value = value;
          return _this;
        }
        HttpHeader2.prototype.getSchemaKey = function() {
          return "HttpHeader";
        };
        HttpHeader2.prototype.getReferencedInputs = function(inputs, referencedInputs) {
          this._value.getReferencedInputs(inputs, referencedInputs);
        };
        HttpHeader2.prototype.prepareForExecution = function(inputs) {
          this._value.substituteInputValues(inputs, shared_1.ContentTypes.applicationXWwwFormUrlencoded);
        };
        Object.defineProperty(HttpHeader2.prototype, "value", {
          get: function() {
            return this._value.get();
          },
          set: function(newValue) {
            this._value.set(newValue);
          },
          enumerable: false,
          configurable: true
        });
        HttpHeader2.nameProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "name");
        HttpHeader2.valueProperty = new StringWithSubstitutionProperty(serialization_1.Versions.v1_0, "value");
        __decorate([
          (0, serialization_1.property)(HttpHeader2.nameProperty)
        ], HttpHeader2.prototype, "name", void 0);
        __decorate([
          (0, serialization_1.property)(HttpHeader2.valueProperty)
        ], HttpHeader2.prototype, "_value", void 0);
        return HttpHeader2;
      }(serialization_1.SerializableObject)
    );
    exports.HttpHeader = HttpHeader;
    var HttpAction = (
      /** @class */
      function(_super) {
        __extends(HttpAction2, _super);
        function HttpAction2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this._ignoreInputValidation = false;
          return _this;
        }
        HttpAction2.prototype.internalGetReferencedInputs = function() {
          var allInputs = this.parent ? this.parent.getRootElement().getAllInputs() : [];
          var result = {};
          this._url.getReferencedInputs(allInputs, result);
          for (var _i = 0, _a = this.headers; _i < _a.length; _i++) {
            var header = _a[_i];
            header.getReferencedInputs(allInputs, result);
          }
          this._body.getReferencedInputs(allInputs, result);
          return result;
        };
        HttpAction2.prototype.internalPrepareForExecution = function(inputs) {
          if (inputs) {
            this._url.substituteInputValues(inputs, shared_1.ContentTypes.applicationXWwwFormUrlencoded);
            var contentType = shared_1.ContentTypes.applicationJson;
            for (var _i = 0, _a = this.headers; _i < _a.length; _i++) {
              var header = _a[_i];
              header.prepareForExecution(inputs);
              if (header.name && header.name.toLowerCase() === "content-type") {
                contentType = header.value;
              }
            }
            this._body.substituteInputValues(inputs, contentType);
          }
        };
        HttpAction2.prototype.getJsonTypeName = function() {
          return HttpAction2.JsonTypeName;
        };
        HttpAction2.prototype.internalValidateProperties = function(context) {
          _super.prototype.internalValidateProperties.call(this, context);
          if (!this.url) {
            context.addFailure(this, Enums.ValidationEvent.PropertyCantBeNull, strings_1.Strings.errors.propertyMustBeSet("url"));
          }
          if (this.headers.length > 0) {
            for (var _i = 0, _a = this.headers; _i < _a.length; _i++) {
              var header = _a[_i];
              if (!header.name) {
                context.addFailure(this, Enums.ValidationEvent.PropertyCantBeNull, strings_1.Strings.errors.actionHttpHeadersMustHaveNameAndValue());
              }
            }
          }
        };
        Object.defineProperty(HttpAction2.prototype, "ignoreInputValidation", {
          get: function() {
            return this._ignoreInputValidation;
          },
          set: function(value) {
            this._ignoreInputValidation = value;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(HttpAction2.prototype, "url", {
          get: function() {
            return this._url.get();
          },
          set: function(value) {
            this._url.set(value);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(HttpAction2.prototype, "body", {
          get: function() {
            return this._body.get();
          },
          set: function(value) {
            this._body.set(value);
          },
          enumerable: false,
          configurable: true
        });
        HttpAction2.urlProperty = new StringWithSubstitutionProperty(serialization_1.Versions.v1_0, "url");
        HttpAction2.bodyProperty = new StringWithSubstitutionProperty(serialization_1.Versions.v1_0, "body");
        HttpAction2.methodProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "method");
        HttpAction2.headersProperty = new serialization_1.SerializableObjectCollectionProperty(serialization_1.Versions.v1_0, "headers", HttpHeader);
        HttpAction2.ignoreInputValidationProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_3, "ignoreInputValidation", false);
        HttpAction2.JsonTypeName = "Action.Http";
        __decorate([
          (0, serialization_1.property)(HttpAction2.urlProperty)
        ], HttpAction2.prototype, "_url", void 0);
        __decorate([
          (0, serialization_1.property)(HttpAction2.bodyProperty)
        ], HttpAction2.prototype, "_body", void 0);
        __decorate([
          (0, serialization_1.property)(HttpAction2.methodProperty)
        ], HttpAction2.prototype, "method", void 0);
        __decorate([
          (0, serialization_1.property)(HttpAction2.headersProperty)
        ], HttpAction2.prototype, "headers", void 0);
        __decorate([
          (0, serialization_1.property)(HttpAction2.ignoreInputValidationProperty)
        ], HttpAction2.prototype, "_ignoreInputValidation", void 0);
        return HttpAction2;
      }(Action)
    );
    exports.HttpAction = HttpAction;
    var ShowCardAction = (
      /** @class */
      function(_super) {
        __extends(ShowCardAction2, _super);
        function ShowCardAction2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.card = new InlineAdaptiveCard();
          return _this;
        }
        ShowCardAction2.prototype.updateCssClasses = function() {
          _super.prototype.updateCssClasses.call(this);
          if (this.renderedElement) {
            var effectiveHostConfig = this.parent ? this.parent.hostConfig : host_config_1.defaultHostConfig;
            this.renderedElement.classList.add(effectiveHostConfig.makeCssClassName("expandable"));
            this.renderedElement.setAttribute("aria-expanded", (this.state === 1).toString());
          }
        };
        ShowCardAction2.prototype.internalParse = function(source, context) {
          _super.prototype.internalParse.call(this, source, context);
          var jsonCard = source["card"];
          if (jsonCard) {
            this.card.parse(jsonCard, context);
          } else {
            context.logParseEvent(this, Enums.ValidationEvent.PropertyCantBeNull, strings_1.Strings.errors.showCardMustHaveCard());
          }
        };
        ShowCardAction2.prototype.internalToJSON = function(target, context) {
          _super.prototype.internalToJSON.call(this, target, context);
          if (this.card) {
            context.serializeValue(target, "card", this.card.toJSON(context));
          }
        };
        ShowCardAction2.prototype.raiseExecuteActionEvent = function() {
          if (this.hostConfig.actions.showCard.actionMode === Enums.ShowCardActionMode.Popup) {
            _super.prototype.raiseExecuteActionEvent.call(this);
          }
        };
        ShowCardAction2.prototype.releaseDOMResources = function() {
          _super.prototype.releaseDOMResources.call(this);
          this.card.releaseDOMResources();
        };
        ShowCardAction2.prototype.getJsonTypeName = function() {
          return ShowCardAction2.JsonTypeName;
        };
        ShowCardAction2.prototype.internalValidateProperties = function(context) {
          _super.prototype.internalValidateProperties.call(this, context);
          this.card.internalValidateProperties(context);
        };
        ShowCardAction2.prototype.setParent = function(value) {
          _super.prototype.setParent.call(this, value);
          this.card.setParent(value);
        };
        ShowCardAction2.prototype.getAllInputs = function(processActions) {
          if (processActions === void 0) {
            processActions = true;
          }
          return this.card.getAllInputs(processActions);
        };
        ShowCardAction2.prototype.getAllActions = function() {
          var result = _super.prototype.getAllActions.call(this);
          result.push.apply(result, this.card.getAllActions());
          return result;
        };
        ShowCardAction2.prototype.getResourceInformation = function() {
          var result = _super.prototype.getResourceInformation.call(this);
          result.push.apply(result, this.card.getResourceInformation());
          return result;
        };
        ShowCardAction2.prototype.getActionById = function(id) {
          var result = _super.prototype.getActionById.call(this, id);
          if (!result) {
            result = this.card.getActionById(id);
          }
          return result;
        };
        ShowCardAction2.JsonTypeName = "Action.ShowCard";
        return ShowCardAction2;
      }(Action)
    );
    exports.ShowCardAction = ShowCardAction;
    var OverflowAction = (
      /** @class */
      function(_super) {
        __extends(OverflowAction2, _super);
        function OverflowAction2(actions) {
          var _this = _super.call(this) || this;
          _this._actions = actions;
          _this.title = strings_1.Strings.defaults.overflowButtonText();
          return _this;
        }
        OverflowAction2.prototype.getActions = function() {
          return this._actions;
        };
        OverflowAction2.prototype.getAllActions = function() {
          var result = _super.prototype.getAllActions.call(this);
          result.push.apply(result, this._actions);
          return result;
        };
        OverflowAction2.prototype.getJsonTypeName = function() {
          return ShowCardAction.JsonTypeName;
        };
        OverflowAction2.prototype.execute = function() {
          var _this = this;
          var _a;
          var shouldDisplayPopupMenu = !raiseDisplayOverflowActionMenuEvent(this, this.renderedElement);
          if (shouldDisplayPopupMenu && this.renderedElement) {
            var contextMenu_1 = new controls_1.PopupMenu();
            contextMenu_1.hostConfig = this.hostConfig;
            var _loop_2 = function(i2) {
              var menuItem = new controls_1.MenuItem(i2.toString(), (_a = this_1._actions[i2].title) !== null && _a !== void 0 ? _a : "");
              menuItem.isEnabled = this_1._actions[i2].isEnabled;
              menuItem.onClick = function() {
                var actionToExecute = _this._actions[i2];
                contextMenu_1.closePopup(false);
                if (actionToExecute.isEnabled) {
                  actionToExecute.execute();
                }
              };
              contextMenu_1.items.add(menuItem);
            };
            var this_1 = this;
            for (var i = 0; i < this._actions.length; i++) {
              _loop_2(i);
            }
            contextMenu_1.popup(this.renderedElement);
          }
        };
        OverflowAction2.JsonTypeName = "Action.Overflow";
        return OverflowAction2;
      }(Action)
    );
    var ActionCollection = (
      /** @class */
      function() {
        function ActionCollection2(owner) {
          this._items = [];
          this._renderedActions = [];
          this._owner = owner;
        }
        ActionCollection2.prototype.isActionAllowed = function(action) {
          var forbiddenTypes = this._owner.getForbiddenActionTypes();
          if (forbiddenTypes) {
            for (var _i = 0, forbiddenTypes_1 = forbiddenTypes; _i < forbiddenTypes_1.length; _i++) {
              var forbiddenType = forbiddenTypes_1[_i];
              if (action.constructor === forbiddenType) {
                return false;
              }
            }
          }
          return true;
        };
        ActionCollection2.prototype.refreshContainer = function() {
          clearElement(this._actionCardContainer);
          if (!this._actionCard) {
            this._actionCardContainer.style.marginTop = "0px";
            return;
          }
          this._actionCardContainer.style.marginTop = this.renderedActionCount > 0 ? this._owner.hostConfig.actions.showCard.inlineTopMargin + "px" : "0px";
          var padding = this._owner.getEffectivePadding();
          this._owner.getImmediateSurroundingPadding(padding);
          var physicalPadding = this._owner.hostConfig.paddingDefinitionToSpacingDefinition(padding);
          if (this._actionCard) {
            this._actionCard.style.paddingLeft = physicalPadding.left + "px";
            this._actionCard.style.paddingRight = physicalPadding.right + "px";
            this._actionCard.style.marginLeft = "-" + physicalPadding.left + "px";
            this._actionCard.style.marginRight = "-" + physicalPadding.right + "px";
            if (physicalPadding.bottom !== 0 && !this._owner.isDesignMode()) {
              this._actionCard.style.paddingBottom = physicalPadding.bottom + "px";
              this._actionCard.style.marginBottom = "-" + physicalPadding.bottom + "px";
            }
            Utils.appendChild(this._actionCardContainer, this._actionCard);
          }
        };
        ActionCollection2.prototype.layoutChanged = function() {
          this._owner.getRootElement().updateLayout();
        };
        ActionCollection2.prototype.showActionCard = function(action, suppressStyle, raiseEvent) {
          if (suppressStyle === void 0) {
            suppressStyle = false;
          }
          if (raiseEvent === void 0) {
            raiseEvent = true;
          }
          action.card.suppressStyle = suppressStyle;
          var renderedCard = action.card.renderedElement && !this._owner.isDesignMode() ? action.card.renderedElement : action.card.render();
          this._actionCard = renderedCard;
          this._expandedAction = action;
          this.refreshContainer();
          if (raiseEvent) {
            this.layoutChanged();
            raiseInlineCardExpandedEvent(action, true);
          }
        };
        ActionCollection2.prototype.collapseExpandedAction = function() {
          for (var _i = 0, _a = this._renderedActions; _i < _a.length; _i++) {
            var action = _a[_i];
            action.state = 0;
          }
          var previouslyExpandedAction = this._expandedAction;
          this._expandedAction = void 0;
          this._actionCard = void 0;
          this.refreshContainer();
          if (previouslyExpandedAction) {
            this.layoutChanged();
            raiseInlineCardExpandedEvent(previouslyExpandedAction, false);
          }
        };
        ActionCollection2.prototype.expandShowCardAction = function(action, raiseEvent) {
          var _this = this;
          var afterSelectedAction = false;
          for (var _i = 0, _a = this._renderedActions; _i < _a.length; _i++) {
            var renderedAction = _a[_i];
            if (this._owner.hostConfig.actions.actionsOrientation == Enums.Orientation.Horizontal && afterSelectedAction) {
              renderedAction.isFocusable = false;
            }
            if (renderedAction !== action) {
              renderedAction.state = 2;
            } else {
              renderedAction.state = 1;
              afterSelectedAction = true;
              if (renderedAction.renderedElement) {
                renderedAction.renderedElement.onblur = function(_e) {
                  for (var _i2 = 0, _a2 = _this._renderedActions; _i2 < _a2.length; _i2++) {
                    var ra = _a2[_i2];
                    ra.isFocusable = true;
                  }
                };
              }
            }
          }
          this.showActionCard(action, !(this._owner.isAtTheVeryLeft() && this._owner.isAtTheVeryRight()), raiseEvent);
        };
        ActionCollection2.prototype.releaseDOMResources = function() {
          for (var _i = 0, _a = this._renderedActions; _i < _a.length; _i++) {
            var action = _a[_i];
            action.releaseDOMResources();
          }
        };
        ActionCollection2.prototype.actionExecuted = function(action) {
          if (!(action instanceof ShowCardAction)) {
            this.collapseExpandedAction();
          } else {
            if (action === this._expandedAction) {
              this.collapseExpandedAction();
            } else if (this._owner.hostConfig.actions.showCard.actionMode === Enums.ShowCardActionMode.Inline) {
              this.expandShowCardAction(action, true);
            }
          }
        };
        ActionCollection2.prototype.parse = function(source, context) {
          this.clear();
          if (Array.isArray(source)) {
            for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
              var jsonAction = source_1[_i];
              var forbiddenActions = [];
              if (this._owner instanceof ContainerWithActions) {
                forbiddenActions = this._owner.getForbiddenActionNames();
              }
              var action = context.parseAction(this._owner, jsonAction, forbiddenActions, !this._owner.isDesignMode());
              if (action) {
                this.addAction(action);
              }
            }
          }
        };
        ActionCollection2.prototype.toJSON = function(target, propertyName, context) {
          context.serializeArray(target, propertyName, this._items);
        };
        ActionCollection2.prototype.getActionAt = function(id) {
          return this._items[id];
        };
        ActionCollection2.prototype.getActionCount = function() {
          return this._items.length;
        };
        ActionCollection2.prototype.getActionById = function(id) {
          var result = void 0;
          for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            result = item.getActionById(id);
            if (result) {
              break;
            }
          }
          return result;
        };
        ActionCollection2.prototype.validateProperties = function(context) {
          if (this._owner.hostConfig.actions.maxActions && this._items.length > this._owner.hostConfig.actions.maxActions) {
            context.addFailure(this._owner, Enums.ValidationEvent.TooManyActions, strings_1.Strings.errors.tooManyActions(this._owner.hostConfig.actions.maxActions));
          }
          if (this._items.length > 0 && !this._owner.hostConfig.supportsInteractivity) {
            context.addFailure(this._owner, Enums.ValidationEvent.InteractivityNotAllowed, strings_1.Strings.errors.interactivityNotAllowed());
          }
          for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!this.isActionAllowed(item)) {
              context.addFailure(this._owner, Enums.ValidationEvent.ActionTypeNotAllowed, strings_1.Strings.errors.actionTypeNotAllowed(item.getJsonTypeName()));
            }
            item.internalValidateProperties(context);
          }
        };
        ActionCollection2.prototype.render = function(orientation) {
          var hostConfig = this._owner.hostConfig;
          if (!hostConfig.supportsInteractivity) {
            return void 0;
          }
          var element = document.createElement("div");
          var maxActions = hostConfig.actions.maxActions ? Math.min(hostConfig.actions.maxActions, this._items.length) : this._items.length;
          this._actionCardContainer = document.createElement("div");
          this._renderedActions = [];
          if (hostConfig.actions.preExpandSingleShowCardAction && maxActions === 1 && this._items[0] instanceof ShowCardAction && this.isActionAllowed(this._items[0])) {
            this.showActionCard(this._items[0], true);
            this._renderedActions.push(this._items[0]);
          } else {
            var buttonStrip = document.createElement("div");
            buttonStrip.className = hostConfig.makeCssClassName("ac-actionSet");
            buttonStrip.style.display = "flex";
            if (orientation === Enums.Orientation.Horizontal) {
              buttonStrip.style.flexDirection = "row";
              if (this._owner.horizontalAlignment && hostConfig.actions.actionAlignment !== Enums.ActionAlignment.Stretch) {
                switch (this._owner.horizontalAlignment) {
                  case Enums.HorizontalAlignment.Center:
                    buttonStrip.style.justifyContent = "center";
                    break;
                  case Enums.HorizontalAlignment.Right:
                    buttonStrip.style.justifyContent = "flex-end";
                    break;
                  default:
                    buttonStrip.style.justifyContent = "flex-start";
                    break;
                }
              } else {
                switch (hostConfig.actions.actionAlignment) {
                  case Enums.ActionAlignment.Center:
                    buttonStrip.style.justifyContent = "center";
                    break;
                  case Enums.ActionAlignment.Right:
                    buttonStrip.style.justifyContent = "flex-end";
                    break;
                  default:
                    buttonStrip.style.justifyContent = "flex-start";
                    break;
                }
              }
            } else {
              buttonStrip.style.flexDirection = "column";
              if (this._owner.horizontalAlignment && hostConfig.actions.actionAlignment !== Enums.ActionAlignment.Stretch) {
                switch (this._owner.horizontalAlignment) {
                  case Enums.HorizontalAlignment.Center:
                    buttonStrip.style.alignItems = "center";
                    break;
                  case Enums.HorizontalAlignment.Right:
                    buttonStrip.style.alignItems = "flex-end";
                    break;
                  default:
                    buttonStrip.style.alignItems = "flex-start";
                    break;
                }
              } else {
                switch (hostConfig.actions.actionAlignment) {
                  case Enums.ActionAlignment.Center:
                    buttonStrip.style.alignItems = "center";
                    break;
                  case Enums.ActionAlignment.Right:
                    buttonStrip.style.alignItems = "flex-end";
                    break;
                  case Enums.ActionAlignment.Stretch:
                    buttonStrip.style.alignItems = "stretch";
                    break;
                  default:
                    buttonStrip.style.alignItems = "flex-start";
                    break;
                }
              }
            }
            var allowedActions = this._items.filter(this.isActionAllowed.bind(this));
            var primaryActions_1 = [];
            var secondaryActions_1 = [];
            if (!this._owner.isDesignMode()) {
              allowedActions.forEach(function(action2) {
                return action2.mode === Enums.ActionMode.Secondary ? secondaryActions_1.push(action2) : primaryActions_1.push(action2);
              });
              var overflowPrimaryActions = primaryActions_1.splice(hostConfig.actions.maxActions);
              if (shared_1.GlobalSettings.allowMoreThanMaxActionsInOverflowMenu) {
                secondaryActions_1.push.apply(secondaryActions_1, overflowPrimaryActions);
              }
              var shouldRenderOverflowActionButton = true;
              if (secondaryActions_1.length > 0) {
                if (!this._overflowAction) {
                  this._overflowAction = new OverflowAction(secondaryActions_1);
                  this._overflowAction.setParent(this._owner);
                  this._overflowAction["_actionCollection"] = this;
                }
                var isRootAction = this._owner instanceof AdaptiveCard && !this._owner.parent;
                shouldRenderOverflowActionButton = !raiseRenderOverflowActionsEvent(this._overflowAction, isRootAction);
              }
              if (this._overflowAction && shouldRenderOverflowActionButton) {
                primaryActions_1.push(this._overflowAction);
              }
            } else {
              primaryActions_1 = allowedActions;
            }
            for (var i = 0; i < primaryActions_1.length; i++) {
              var action = primaryActions_1[i];
              action.render();
              if (action.renderedElement) {
                if (hostConfig.actions.actionsOrientation === Enums.Orientation.Horizontal && hostConfig.actions.actionAlignment === Enums.ActionAlignment.Stretch) {
                  action.renderedElement.style.flex = "0 1 100%";
                } else {
                  action.renderedElement.style.flex = "0 1 auto";
                }
                buttonStrip.appendChild(action.renderedElement);
                this._renderedActions.push(action);
                if (i < primaryActions_1.length - 1 && hostConfig.actions.buttonSpacing > 0) {
                  var spacer = document.createElement("div");
                  if (orientation === Enums.Orientation.Horizontal) {
                    spacer.style.flex = "0 0 auto";
                    spacer.style.width = hostConfig.actions.buttonSpacing + "px";
                  } else {
                    spacer.style.height = hostConfig.actions.buttonSpacing + "px";
                  }
                  Utils.appendChild(buttonStrip, spacer);
                }
              }
            }
            var buttonStripContainer = document.createElement("div");
            buttonStripContainer.style.overflow = "hidden";
            buttonStripContainer.appendChild(buttonStrip);
            Utils.appendChild(element, buttonStripContainer);
          }
          Utils.appendChild(element, this._actionCardContainer);
          for (var _i = 0, _a = this._renderedActions; _i < _a.length; _i++) {
            var renderedAction = _a[_i];
            if (renderedAction.state === 1) {
              this.expandShowCardAction(renderedAction, false);
              break;
            }
          }
          return this._renderedActions.length > 0 ? element : void 0;
        };
        ActionCollection2.prototype.addAction = function(action) {
          if (!action) {
            throw new Error("The action parameter cannot be null.");
          }
          if ((!action.parent || action.parent === this._owner) && this._items.indexOf(action) < 0) {
            this._items.push(action);
            if (!action.parent) {
              action.setParent(this._owner);
            }
            action["_actionCollection"] = this;
          } else {
            throw new Error(strings_1.Strings.errors.actionAlreadyParented());
          }
        };
        ActionCollection2.prototype.removeAction = function(action) {
          if (this.expandedAction && this._expandedAction === action) {
            this.collapseExpandedAction();
          }
          var actionIndex = this._items.indexOf(action);
          if (actionIndex >= 0) {
            this._items.splice(actionIndex, 1);
            action.setParent(void 0);
            action["_actionCollection"] = void 0;
            for (var i = 0; i < this._renderedActions.length; i++) {
              if (this._renderedActions[i] === action) {
                this._renderedActions.splice(i, 1);
                break;
              }
            }
            return true;
          }
          return false;
        };
        ActionCollection2.prototype.clear = function() {
          this._items = [];
          this._renderedActions = [];
          this._expandedAction = void 0;
        };
        ActionCollection2.prototype.getAllInputs = function(processActions) {
          if (processActions === void 0) {
            processActions = true;
          }
          var result = [];
          if (processActions) {
            for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
              var action = _a[_i];
              result.push.apply(result, action.getAllInputs());
            }
          }
          return result;
        };
        ActionCollection2.prototype.getResourceInformation = function() {
          var result = [];
          for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var action = _a[_i];
            result.push.apply(result, action.getResourceInformation());
          }
          return result;
        };
        Object.defineProperty(ActionCollection2.prototype, "renderedActionCount", {
          get: function() {
            return this._renderedActions.length;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(ActionCollection2.prototype, "expandedAction", {
          get: function() {
            return this._expandedAction;
          },
          enumerable: false,
          configurable: true
        });
        return ActionCollection2;
      }()
    );
    var ActionSet = (
      /** @class */
      function(_super) {
        __extends(ActionSet2, _super);
        function ActionSet2() {
          var _this = _super.call(this) || this;
          _this._actionCollection = new ActionCollection(_this);
          return _this;
        }
        ActionSet2.prototype.internalParse = function(source, context) {
          _super.prototype.internalParse.call(this, source, context);
          this._actionCollection.parse(source["actions"], context);
        };
        ActionSet2.prototype.internalToJSON = function(target, context) {
          _super.prototype.internalToJSON.call(this, target, context);
          this._actionCollection.toJSON(target, "actions", context);
        };
        ActionSet2.prototype.internalRender = function() {
          return this._actionCollection.render(this.orientation !== void 0 ? this.orientation : this.hostConfig.actions.actionsOrientation);
        };
        ActionSet2.prototype.releaseDOMResources = function() {
          _super.prototype.releaseDOMResources.call(this);
          this._actionCollection.releaseDOMResources();
        };
        ActionSet2.prototype.isBleedingAtBottom = function() {
          if (this._actionCollection.renderedActionCount === 0) {
            return _super.prototype.isBleedingAtBottom.call(this);
          } else {
            if (this._actionCollection.getActionCount() === 1) {
              return this._actionCollection.expandedAction !== void 0 && !this.hostConfig.actions.preExpandSingleShowCardAction;
            } else {
              return this._actionCollection.expandedAction !== void 0;
            }
          }
        };
        ActionSet2.prototype.getJsonTypeName = function() {
          return "ActionSet";
        };
        ActionSet2.prototype.getActionCount = function() {
          return this._actionCollection.getActionCount();
        };
        ActionSet2.prototype.getActionAt = function(index) {
          if (index >= 0 && index < this.getActionCount()) {
            return this._actionCollection.getActionAt(index);
          } else {
            return _super.prototype.getActionAt.call(this, index);
          }
        };
        ActionSet2.prototype.getActionById = function(id) {
          var result = this._actionCollection.getActionById(id);
          return result ? result : _super.prototype.getActionById.call(this, id);
        };
        ActionSet2.prototype.getAllActions = function() {
          var result = _super.prototype.getAllActions.call(this);
          for (var i = 0; i < this.getActionCount(); i++) {
            var action = this.getActionAt(i);
            if (action) {
              result.push(action);
            }
          }
          return result;
        };
        ActionSet2.prototype.internalValidateProperties = function(context) {
          _super.prototype.internalValidateProperties.call(this, context);
          this._actionCollection.validateProperties(context);
        };
        ActionSet2.prototype.addAction = function(action) {
          this._actionCollection.addAction(action);
        };
        ActionSet2.prototype.getAllInputs = function(processActions) {
          if (processActions === void 0) {
            processActions = true;
          }
          return processActions ? this._actionCollection.getAllInputs() : [];
        };
        ActionSet2.prototype.getResourceInformation = function() {
          return this._actionCollection.getResourceInformation();
        };
        ActionSet2.prototype.findDOMNodeOwner = function(node) {
          var target = void 0;
          for (var i = 0; i < this.getActionCount(); i++) {
            var action = this.getActionAt(i);
            if (action) {
              target = action.findDOMNodeOwner(node);
              if (target) {
                return target;
              }
            }
          }
          return _super.prototype.findDOMNodeOwner.call(this, node);
        };
        Object.defineProperty(ActionSet2.prototype, "isInteractive", {
          get: function() {
            return true;
          },
          enumerable: false,
          configurable: true
        });
        ActionSet2.orientationProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_1, "orientation", Enums.Orientation);
        __decorate([
          (0, serialization_1.property)(ActionSet2.orientationProperty)
        ], ActionSet2.prototype, "orientation", void 0);
        return ActionSet2;
      }(CardElement)
    );
    exports.ActionSet = ActionSet;
    var ContainerStyleProperty = (
      /** @class */
      function(_super) {
        __extends(ContainerStyleProperty2, _super);
        function ContainerStyleProperty2(targetVersion, name, defaultValue, onGetInitialValue) {
          var _this = _super.call(this, targetVersion, name, [
            { value: Enums.ContainerStyle.Default },
            { value: Enums.ContainerStyle.Emphasis },
            { targetVersion: serialization_1.Versions.v1_2, value: Enums.ContainerStyle.Accent },
            { targetVersion: serialization_1.Versions.v1_2, value: Enums.ContainerStyle.Good },
            { targetVersion: serialization_1.Versions.v1_2, value: Enums.ContainerStyle.Attention },
            { targetVersion: serialization_1.Versions.v1_2, value: Enums.ContainerStyle.Warning }
          ], defaultValue, onGetInitialValue) || this;
          _this.targetVersion = targetVersion;
          _this.name = name;
          _this.defaultValue = defaultValue;
          _this.onGetInitialValue = onGetInitialValue;
          return _this;
        }
        return ContainerStyleProperty2;
      }(serialization_1.ValueSetProperty)
    );
    exports.ContainerStyleProperty = ContainerStyleProperty;
    var StylableCardElementContainer = (
      /** @class */
      function(_super) {
        __extends(StylableCardElementContainer2, _super);
        function StylableCardElementContainer2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(StylableCardElementContainer2.prototype, "style", {
          get: function() {
            if (this.allowCustomStyle) {
              var style = this.getValue(StylableCardElementContainer2.styleProperty);
              if (style && this.hostConfig.containerStyles.getStyleByName(style)) {
                return style;
              }
            }
            return void 0;
          },
          set: function(value) {
            this.setValue(StylableCardElementContainer2.styleProperty, value);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(StylableCardElementContainer2.prototype, "allowCustomStyle", {
          //#endregion
          get: function() {
            return true;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(StylableCardElementContainer2.prototype, "hasExplicitStyle", {
          get: function() {
            return this.getValue(StylableCardElementContainer2.styleProperty) !== void 0;
          },
          enumerable: false,
          configurable: true
        });
        StylableCardElementContainer2.prototype.applyBorder = function() {
        };
        StylableCardElementContainer2.prototype.applyBackground = function() {
          if (this.renderedElement) {
            var styleDefinition = this.hostConfig.containerStyles.getStyleByName(this.style, this.hostConfig.containerStyles.getStyleByName(this.defaultStyle));
            if (styleDefinition.backgroundColor) {
              var bgColor = Utils.stringToCssColor(styleDefinition.backgroundColor);
              if (bgColor) {
                this.renderedElement.style.backgroundColor = bgColor;
              }
            }
          }
        };
        StylableCardElementContainer2.prototype.applyPadding = function() {
          _super.prototype.applyPadding.call(this);
          if (!this.renderedElement) {
            return;
          }
          var physicalPadding = new shared_1.SpacingDefinition();
          if (this.getEffectivePadding()) {
            physicalPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(this.getEffectivePadding());
          }
          this.renderedElement.style.paddingTop = physicalPadding.top + "px";
          this.renderedElement.style.paddingRight = physicalPadding.right + "px";
          this.renderedElement.style.paddingBottom = physicalPadding.bottom + "px";
          this.renderedElement.style.paddingLeft = physicalPadding.left + "px";
          if (this.isBleeding()) {
            var padding = new shared_1.PaddingDefinition();
            this.getImmediateSurroundingPadding(padding);
            var surroundingPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(padding);
            this.renderedElement.style.marginRight = "-" + surroundingPadding.right + "px";
            this.renderedElement.style.marginLeft = "-" + surroundingPadding.left + "px";
            if (!this.isDesignMode()) {
              this.renderedElement.style.marginTop = "-" + surroundingPadding.top + "px";
              this.renderedElement.style.marginBottom = "-" + surroundingPadding.bottom + "px";
            }
            if (this.separatorElement && this.separatorOrientation === Enums.Orientation.Horizontal) {
              this.separatorElement.style.marginLeft = "-" + surroundingPadding.left + "px";
              this.separatorElement.style.marginRight = "-" + surroundingPadding.right + "px";
            }
          } else {
            this.renderedElement.style.marginRight = "0";
            this.renderedElement.style.marginLeft = "0";
            this.renderedElement.style.marginTop = "0";
            this.renderedElement.style.marginBottom = "0";
            if (this.separatorElement && this.separatorOrientation === Enums.Orientation.Horizontal) {
              this.separatorElement.style.marginRight = "0";
              this.separatorElement.style.marginLeft = "0";
            }
          }
        };
        StylableCardElementContainer2.prototype.getHasBackground = function(ignoreBackgroundImages) {
          if (ignoreBackgroundImages === void 0) {
            ignoreBackgroundImages = false;
          }
          var currentElement = this.parent;
          while (currentElement) {
            var currentElementHasBackgroundImage = false;
            if (ignoreBackgroundImages) {
              currentElementHasBackgroundImage = false;
            } else {
              currentElementHasBackgroundImage = currentElement instanceof Container ? currentElement.backgroundImage.isValid() : false;
            }
            if (currentElement instanceof StylableCardElementContainer2) {
              if (this.hasExplicitStyle && (currentElement.getEffectiveStyle() !== this.getEffectiveStyle() || currentElementHasBackgroundImage)) {
                return true;
              }
            }
            currentElement = currentElement.parent;
          }
          return false;
        };
        StylableCardElementContainer2.prototype.getDefaultPadding = function() {
          return this.getHasBackground() || this.getHasBorder() ? new shared_1.PaddingDefinition(Enums.Spacing.Padding, Enums.Spacing.Padding, Enums.Spacing.Padding, Enums.Spacing.Padding) : _super.prototype.getDefaultPadding.call(this);
        };
        StylableCardElementContainer2.prototype.internalValidateProperties = function(context) {
          _super.prototype.internalValidateProperties.call(this, context);
          var explicitStyle = this.getValue(StylableCardElementContainer2.styleProperty);
          if (explicitStyle !== void 0) {
            var styleDefinition = this.hostConfig.containerStyles.getStyleByName(explicitStyle);
            if (!styleDefinition) {
              context.addFailure(this, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.invalidPropertyValue(explicitStyle, "style"));
            }
          }
        };
        StylableCardElementContainer2.prototype.render = function() {
          var renderedElement = _super.prototype.render.call(this);
          if (renderedElement && this.getHasBackground()) {
            this.applyBackground();
          }
          this.applyBorder();
          return renderedElement;
        };
        StylableCardElementContainer2.prototype.getEffectiveStyle = function() {
          var effectiveStyle = this.style;
          return effectiveStyle ? effectiveStyle : _super.prototype.getEffectiveStyle.call(this);
        };
        StylableCardElementContainer2.styleProperty = new ContainerStyleProperty(serialization_1.Versions.v1_0, "style");
        __decorate([
          (0, serialization_1.property)(StylableCardElementContainer2.styleProperty)
        ], StylableCardElementContainer2.prototype, "style", null);
        return StylableCardElementContainer2;
      }(CardElementContainer)
    );
    exports.StylableCardElementContainer = StylableCardElementContainer;
    var ContainerBase = (
      /** @class */
      function(_super) {
        __extends(ContainerBase2, _super);
        function ContainerBase2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this._bleed = false;
          return _this;
        }
        ContainerBase2.prototype.adjustRenderedElementSize = function(renderedElement) {
          _super.prototype.adjustRenderedElementSize.call(this, renderedElement);
          if (this.minPixelHeight) {
            renderedElement.style.minHeight = this.minPixelHeight + "px";
          }
        };
        ContainerBase2.prototype.getHasExpandedAction = function() {
          return false;
        };
        ContainerBase2.prototype.getBleed = function() {
          return this._bleed;
        };
        ContainerBase2.prototype.setBleed = function(value) {
          this._bleed = value;
        };
        Object.defineProperty(ContainerBase2.prototype, "renderedActionCount", {
          get: function() {
            return 0;
          },
          enumerable: false,
          configurable: true
        });
        ContainerBase2.prototype.isBleeding = function() {
          return (this.getHasBackground() || this.hostConfig.alwaysAllowBleed) && this.getBleed();
        };
        ContainerBase2.bleedProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_2, "bleed", false);
        ContainerBase2.minHeightProperty = new serialization_1.PixelSizeProperty(serialization_1.Versions.v1_2, "minHeight");
        __decorate([
          (0, serialization_1.property)(ContainerBase2.bleedProperty)
        ], ContainerBase2.prototype, "_bleed", void 0);
        __decorate([
          (0, serialization_1.property)(ContainerBase2.minHeightProperty)
        ], ContainerBase2.prototype, "minPixelHeight", void 0);
        return ContainerBase2;
      }(StylableCardElementContainer)
    );
    exports.ContainerBase = ContainerBase;
    var BackgroundImage = (
      /** @class */
      function(_super) {
        __extends(BackgroundImage2, _super);
        function BackgroundImage2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        BackgroundImage2.prototype.getSchemaKey = function() {
          return "BackgroundImage";
        };
        BackgroundImage2.prototype.internalParse = function(source, context) {
          if (typeof source === "string") {
            this.resetDefaultValues();
            this.url = source;
          } else {
            return _super.prototype.internalParse.call(this, source, context);
          }
        };
        BackgroundImage2.prototype.apply = function(element) {
          if (this.url && element.renderedElement) {
            element.renderedElement.style.backgroundImage = "url('" + element.preProcessPropertyValue(BackgroundImage2.urlProperty, this.url) + "')";
            switch (this.fillMode) {
              case Enums.FillMode.Repeat:
                element.renderedElement.style.backgroundRepeat = "repeat";
                break;
              case Enums.FillMode.RepeatHorizontally:
                element.renderedElement.style.backgroundRepeat = "repeat-x";
                break;
              case Enums.FillMode.RepeatVertically:
                element.renderedElement.style.backgroundRepeat = "repeat-y";
                break;
              case Enums.FillMode.Cover:
              default:
                element.renderedElement.style.backgroundRepeat = "no-repeat";
                element.renderedElement.style.backgroundSize = "cover";
                break;
            }
            switch (this.horizontalAlignment) {
              case Enums.HorizontalAlignment.Left:
                break;
              case Enums.HorizontalAlignment.Center:
                element.renderedElement.style.backgroundPositionX = "center";
                break;
              case Enums.HorizontalAlignment.Right:
                element.renderedElement.style.backgroundPositionX = "right";
                break;
            }
            switch (this.verticalAlignment) {
              case Enums.VerticalAlignment.Top:
                break;
              case Enums.VerticalAlignment.Center:
                element.renderedElement.style.backgroundPositionY = "center";
                break;
              case Enums.VerticalAlignment.Bottom:
                element.renderedElement.style.backgroundPositionY = "bottom";
                break;
            }
          }
        };
        BackgroundImage2.prototype.isValid = function() {
          return this.url ? true : false;
        };
        BackgroundImage2.urlProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "url");
        BackgroundImage2.fillModeProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_2, "fillMode", Enums.FillMode, Enums.FillMode.Cover);
        BackgroundImage2.horizontalAlignmentProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_2, "horizontalAlignment", Enums.HorizontalAlignment, Enums.HorizontalAlignment.Left);
        BackgroundImage2.verticalAlignmentProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_2, "verticalAlignment", Enums.VerticalAlignment, Enums.VerticalAlignment.Top);
        __decorate([
          (0, serialization_1.property)(BackgroundImage2.urlProperty)
        ], BackgroundImage2.prototype, "url", void 0);
        __decorate([
          (0, serialization_1.property)(BackgroundImage2.fillModeProperty)
        ], BackgroundImage2.prototype, "fillMode", void 0);
        __decorate([
          (0, serialization_1.property)(BackgroundImage2.horizontalAlignmentProperty)
        ], BackgroundImage2.prototype, "horizontalAlignment", void 0);
        __decorate([
          (0, serialization_1.property)(BackgroundImage2.verticalAlignmentProperty)
        ], BackgroundImage2.prototype, "verticalAlignment", void 0);
        return BackgroundImage2;
      }(serialization_1.SerializableObject)
    );
    exports.BackgroundImage = BackgroundImage;
    var Container = (
      /** @class */
      function(_super) {
        __extends(Container2, _super);
        function Container2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this._items = [];
          _this._renderedItems = [];
          return _this;
        }
        Object.defineProperty(Container2.prototype, "backgroundImage", {
          get: function() {
            return this.getValue(Container2.backgroundImageProperty);
          },
          enumerable: false,
          configurable: true
        });
        Container2.prototype.insertItemAt = function(item, index, forceInsert) {
          if (!item.parent || forceInsert) {
            if (item.isStandalone) {
              if (index < 0 || index >= this._items.length) {
                this._items.push(item);
              } else {
                this._items.splice(index, 0, item);
              }
              item.setParent(this);
            } else {
              throw new Error(strings_1.Strings.errors.elementTypeNotStandalone(item.getJsonTypeName()));
            }
          } else {
            throw new Error(strings_1.Strings.errors.elementAlreadyParented());
          }
        };
        Container2.prototype.getItemsCollectionPropertyName = function() {
          return "items";
        };
        Container2.prototype.applyBackground = function() {
          if (this.backgroundImage.isValid() && this.renderedElement) {
            this.backgroundImage.apply(this);
          }
          _super.prototype.applyBackground.call(this);
        };
        Container2.prototype.applyRTL = function(element) {
          if (this.rtl !== void 0) {
            element.dir = this.rtl ? "rtl" : "ltr";
          }
        };
        Container2.prototype.internalRender = function() {
          this._renderedItems = [];
          var hostConfig = this.hostConfig;
          var element = document.createElement("div");
          this.applyRTL(element);
          element.classList.add(hostConfig.makeCssClassName("ac-container"));
          element.style.display = "flex";
          element.style.flexDirection = "column";
          if (shared_1.GlobalSettings.useAdvancedCardBottomTruncation) {
            element.style.minHeight = "-webkit-min-content";
          }
          switch (this.getEffectiveVerticalContentAlignment()) {
            case Enums.VerticalAlignment.Center:
              element.style.justifyContent = "center";
              break;
            case Enums.VerticalAlignment.Bottom:
              element.style.justifyContent = "flex-end";
              break;
            default:
              element.style.justifyContent = "flex-start";
              break;
          }
          if (this._items.length > 0) {
            for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
              var item = _a[_i];
              var renderedItem = this.isElementAllowed(item) ? item.render() : void 0;
              if (renderedItem) {
                if (this._renderedItems.length > 0 && item.separatorElement) {
                  item.separatorElement.style.flex = "0 0 auto";
                  Utils.appendChild(element, item.separatorElement);
                }
                Utils.appendChild(element, renderedItem);
                this._renderedItems.push(item);
              }
            }
          } else {
            if (this.isDesignMode()) {
              var placeholderElement = this.createPlaceholderElement();
              placeholderElement.style.width = "100%";
              placeholderElement.style.height = "100%";
              element.appendChild(placeholderElement);
            }
          }
          return element;
        };
        Container2.prototype.truncateOverflow = function(maxHeight) {
          if (this.renderedElement) {
            var boundary_1 = this.renderedElement.offsetTop + maxHeight + 1;
            var handleElement_1 = function(cardElement) {
              var elt = cardElement.renderedElement;
              if (elt) {
                switch (Utils.getFitStatus(elt, boundary_1)) {
                  case Enums.ContainerFitStatus.FullyInContainer:
                    var sizeChanged = cardElement["resetOverflow"]();
                    if (sizeChanged) {
                      handleElement_1(cardElement);
                    }
                    break;
                  case Enums.ContainerFitStatus.Overflowing:
                    var containerMaxHeight = boundary_1 - elt.offsetTop;
                    cardElement["handleOverflow"](containerMaxHeight);
                    break;
                  case Enums.ContainerFitStatus.FullyOutOfContainer:
                    cardElement["handleOverflow"](0);
                    break;
                }
              }
            };
            for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
              var item = _a[_i];
              handleElement_1(item);
            }
            return true;
          }
          return false;
        };
        Container2.prototype.undoOverflowTruncation = function() {
          for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            item["resetOverflow"]();
          }
        };
        Container2.prototype.getHasBackground = function(ignoreBackgroundImages) {
          if (ignoreBackgroundImages === void 0) {
            ignoreBackgroundImages = false;
          }
          var result = ignoreBackgroundImages ? false : this.backgroundImage.isValid();
          return result || _super.prototype.getHasBackground.call(this, ignoreBackgroundImages);
        };
        Container2.prototype.canHostSingletons = function() {
          return false;
        };
        Container2.prototype.internalParse = function(source, context) {
          _super.prototype.internalParse.call(this, source, context);
          this.clear();
          this.setShouldFallback(false);
          var jsonItems = source[this.getItemsCollectionPropertyName()];
          if (!Array.isArray(jsonItems) && typeof jsonItems === "object" && this.canHostSingletons()) {
            var typeName = Utils.parseString(jsonItems["type"]);
            if (typeName) {
              var registration = context.elementRegistry.findByName(typeName);
              if ((registration === null || registration === void 0 ? void 0 : registration.singletonBehavior) !== registry_1.ElementSingletonBehavior.NotAllowed) {
                var element = context.parseElement(this, jsonItems, [], !this.isDesignMode(), true);
                if (element) {
                  this.insertItemAt(element, -1, true);
                }
              }
            }
          } else if (Array.isArray(jsonItems)) {
            for (var _i = 0, jsonItems_1 = jsonItems; _i < jsonItems_1.length; _i++) {
              var item = jsonItems_1[_i];
              var element = context.parseElement(this, item, this.forbiddenChildElements(), !this.isDesignMode());
              if (element) {
                this.insertItemAt(element, -1, true);
              }
            }
          }
        };
        Container2.prototype.internalToJSON = function(target, context) {
          _super.prototype.internalToJSON.call(this, target, context);
          var collectionPropertyName = this.getItemsCollectionPropertyName();
          if (this._items.length === 1 && this._items[0].getElementSingletonBehavior() === registry_1.ElementSingletonBehavior.Only) {
            context.serializeValue(target, collectionPropertyName, this._items[0].toJSON(context));
          } else {
            context.serializeArray(target, collectionPropertyName, this._items);
          }
        };
        Object.defineProperty(Container2.prototype, "isSelectable", {
          get: function() {
            return true;
          },
          enumerable: false,
          configurable: true
        });
        Container2.prototype.getEffectivePadding = function() {
          if (shared_1.GlobalSettings.removePaddingFromContainersWithBackgroundImage && !this.getHasBackground(true)) {
            return new shared_1.PaddingDefinition();
          }
          return _super.prototype.getEffectivePadding.call(this);
        };
        Container2.prototype.getEffectiveVerticalContentAlignment = function() {
          if (this.verticalContentAlignment !== void 0) {
            return this.verticalContentAlignment;
          }
          var parentContainer = this.getParentContainer();
          return parentContainer ? parentContainer.getEffectiveVerticalContentAlignment() : Enums.VerticalAlignment.Top;
        };
        Container2.prototype.getItemCount = function() {
          return this._items.length;
        };
        Container2.prototype.getItemAt = function(index) {
          return this._items[index];
        };
        Container2.prototype.getFirstVisibleRenderedItem = function() {
          if (this.renderedElement && this._renderedItems && this._renderedItems.length > 0) {
            for (var _i = 0, _a = this._renderedItems; _i < _a.length; _i++) {
              var item = _a[_i];
              if (item.isVisible) {
                return item;
              }
            }
          }
          return void 0;
        };
        Container2.prototype.getLastVisibleRenderedItem = function() {
          if (this.renderedElement && this._renderedItems && this._renderedItems.length > 0) {
            for (var i = this._renderedItems.length - 1; i >= 0; i--) {
              if (this._renderedItems[i].isVisible) {
                return this._renderedItems[i];
              }
            }
          }
          return void 0;
        };
        Container2.prototype.getJsonTypeName = function() {
          return "Container";
        };
        Container2.prototype.isFirstElement = function(element) {
          var designMode = this.isDesignMode();
          for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.isVisible || designMode) {
              return item === element;
            }
          }
          return false;
        };
        Container2.prototype.isLastElement = function(element) {
          var designMode = this.isDesignMode();
          for (var i = this._items.length - 1; i >= 0; i--) {
            if (this._items[i].isVisible || designMode) {
              return this._items[i] === element;
            }
          }
          return false;
        };
        Container2.prototype.isRtl = function() {
          if (this.rtl !== void 0) {
            return this.rtl;
          } else {
            var parentContainer = this.getParentContainer();
            return parentContainer ? parentContainer.isRtl() : false;
          }
        };
        Container2.prototype.isBleedingAtTop = function() {
          var firstRenderedItem = this.getFirstVisibleRenderedItem();
          return this.isBleeding() || (firstRenderedItem ? firstRenderedItem.isBleedingAtTop() : false);
        };
        Container2.prototype.isBleedingAtBottom = function() {
          var lastRenderedItem = this.getLastVisibleRenderedItem();
          return this.isBleeding() || (lastRenderedItem ? lastRenderedItem.isBleedingAtBottom() && lastRenderedItem.getEffectiveStyle() === this.getEffectiveStyle() : false);
        };
        Container2.prototype.indexOf = function(cardElement) {
          return this._items.indexOf(cardElement);
        };
        Container2.prototype.addItem = function(item) {
          this.insertItemAt(item, -1, false);
        };
        Container2.prototype.insertItemBefore = function(item, insertBefore) {
          this.insertItemAt(item, this._items.indexOf(insertBefore), false);
        };
        Container2.prototype.insertItemAfter = function(item, insertAfter) {
          this.insertItemAt(item, this._items.indexOf(insertAfter) + 1, false);
        };
        Container2.prototype.removeItem = function(item) {
          var itemIndex = this._items.indexOf(item);
          if (itemIndex >= 0) {
            this._items.splice(itemIndex, 1);
            item.setParent(void 0);
            this.updateLayout();
            return true;
          }
          return false;
        };
        Container2.prototype.clear = function() {
          this._items = [];
          this._renderedItems = [];
        };
        Container2.prototype.getResourceInformation = function() {
          var result = _super.prototype.getResourceInformation.call(this);
          if (this.backgroundImage.isValid()) {
            result.push({
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion -- validated by `isValid()`
              url: this.backgroundImage.url,
              mimeType: "image"
            });
          }
          return result;
        };
        Container2.prototype.getActionById = function(id) {
          var result = _super.prototype.getActionById.call(this, id);
          if (!result) {
            if (this.selectAction) {
              result = this.selectAction.getActionById(id);
            }
            if (!result) {
              for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                var item = _a[_i];
                result = item.getActionById(id);
                if (result) {
                  break;
                }
              }
            }
          }
          return result;
        };
        Object.defineProperty(Container2.prototype, "padding", {
          get: function() {
            return this.getPadding();
          },
          set: function(value) {
            this.setPadding(value);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Container2.prototype, "selectAction", {
          get: function() {
            return this._selectAction;
          },
          set: function(value) {
            this._selectAction = value;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Container2.prototype, "bleed", {
          get: function() {
            return this.getBleed();
          },
          set: function(value) {
            this.setBleed(value);
          },
          enumerable: false,
          configurable: true
        });
        Container2.backgroundImageProperty = new serialization_1.SerializableObjectProperty(serialization_1.Versions.v1_0, "backgroundImage", BackgroundImage);
        Container2.verticalContentAlignmentProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_1, "verticalContentAlignment", Enums.VerticalAlignment);
        Container2.rtlProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_0, "rtl");
        __decorate([
          (0, serialization_1.property)(Container2.backgroundImageProperty)
        ], Container2.prototype, "backgroundImage", null);
        __decorate([
          (0, serialization_1.property)(Container2.verticalContentAlignmentProperty)
        ], Container2.prototype, "verticalContentAlignment", void 0);
        __decorate([
          (0, serialization_1.property)(Container2.rtlProperty)
        ], Container2.prototype, "rtl", void 0);
        return Container2;
      }(ContainerBase)
    );
    exports.Container = Container;
    var Column = (
      /** @class */
      function(_super) {
        __extends(Column2, _super);
        function Column2(width) {
          if (width === void 0) {
            width = "stretch";
          }
          var _this = _super.call(this) || this;
          _this.width = "stretch";
          _this._computedWeight = 0;
          _this.width = width;
          return _this;
        }
        Column2.prototype.adjustRenderedElementSize = function(renderedElement) {
          var minDesignTimeColumnHeight = 20;
          if (this.isDesignMode()) {
            renderedElement.style.minWidth = "20px";
            renderedElement.style.minHeight = (!this.minPixelHeight ? minDesignTimeColumnHeight : Math.max(this.minPixelHeight, minDesignTimeColumnHeight)) + "px";
          } else {
            renderedElement.style.minWidth = "0";
            if (this.minPixelHeight) {
              renderedElement.style.minHeight = this.minPixelHeight + "px";
            }
          }
          if (this.width === "auto") {
            renderedElement.style.flex = "0 1 auto";
          } else if (this.width === "stretch") {
            renderedElement.style.flex = "1 1 50px";
          } else if (this.width instanceof shared_1.SizeAndUnit) {
            if (this.width.unit === Enums.SizeUnit.Pixel) {
              renderedElement.style.flex = "0 0 auto";
              renderedElement.style.width = this.width.physicalSize + "px";
            } else {
              renderedElement.style.flex = "1 1 " + (this._computedWeight > 0 ? this._computedWeight : this.width.physicalSize) + "%";
            }
          }
        };
        Column2.prototype.shouldSerialize = function(_context) {
          return true;
        };
        Object.defineProperty(Column2.prototype, "separatorOrientation", {
          get: function() {
            return Enums.Orientation.Vertical;
          },
          enumerable: false,
          configurable: true
        });
        Column2.prototype.getJsonTypeName = function() {
          return "Column";
        };
        Object.defineProperty(Column2.prototype, "hasVisibleSeparator", {
          get: function() {
            if (this.parent && this.parent instanceof ColumnSet) {
              return this.separatorElement !== void 0 && !this.parent.isLeftMostElement(this);
            } else {
              return false;
            }
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Column2.prototype, "isStandalone", {
          get: function() {
            return false;
          },
          enumerable: false,
          configurable: true
        });
        Column2.widthProperty = new serialization_1.CustomProperty(serialization_1.Versions.v1_0, "width", function(sender, prop, source, context) {
          var result = prop.defaultValue;
          var value = source[prop.name];
          var invalidWidth = false;
          if (typeof value === "number" && !isNaN(value)) {
            result = new shared_1.SizeAndUnit(value, Enums.SizeUnit.Weight);
          } else if (value === "auto" || value === "stretch") {
            result = value;
          } else if (typeof value === "string") {
            try {
              result = shared_1.SizeAndUnit.parse(value);
              if (result.unit === Enums.SizeUnit.Pixel && prop.targetVersion.compareTo(context.targetVersion) > 0) {
                invalidWidth = true;
              }
            } catch (e) {
              invalidWidth = true;
            }
          } else {
            invalidWidth = true;
          }
          if (invalidWidth) {
            context.logParseEvent(sender, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.invalidColumnWidth(value));
            result = "auto";
          }
          return result;
        }, function(sender, property, target, value, context) {
          if (value instanceof shared_1.SizeAndUnit) {
            if (value.unit === Enums.SizeUnit.Pixel) {
              context.serializeValue(target, "width", value.physicalSize + "px");
            } else {
              context.serializeNumber(target, "width", value.physicalSize);
            }
          } else {
            context.serializeValue(target, "width", value);
          }
        }, "stretch");
        __decorate([
          (0, serialization_1.property)(Column2.widthProperty)
        ], Column2.prototype, "width", void 0);
        return Column2;
      }(Container)
    );
    exports.Column = Column;
    var ColumnSet = (
      /** @class */
      function(_super) {
        __extends(ColumnSet2, _super);
        function ColumnSet2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this._columns = [];
          return _this;
        }
        ColumnSet2.prototype.createColumnInstance = function(source, context) {
          return context.parseCardObject(this, source, [], !this.isDesignMode(), function(typeName) {
            return !typeName || typeName === "Column" ? new Column() : void 0;
          }, function(typeName, _errorType) {
            context.logParseEvent(void 0, Enums.ValidationEvent.ElementTypeNotAllowed, strings_1.Strings.errors.elementTypeNotAllowed(typeName));
          });
        };
        ColumnSet2.prototype.internalRender = function() {
          this._renderedColumns = [];
          if (this._columns.length > 0) {
            var hostConfig = this.hostConfig;
            var element = document.createElement("div");
            element.className = hostConfig.makeCssClassName("ac-columnSet");
            element.style.display = "flex";
            if (shared_1.GlobalSettings.useAdvancedCardBottomTruncation) {
              element.style.minHeight = "-webkit-min-content";
            }
            switch (this.getEffectiveHorizontalAlignment()) {
              case Enums.HorizontalAlignment.Center:
                element.style.justifyContent = "center";
                break;
              case Enums.HorizontalAlignment.Right:
                element.style.justifyContent = "flex-end";
                break;
              default:
                element.style.justifyContent = "flex-start";
                break;
            }
            var totalWeight = 0;
            for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
              var column = _a[_i];
              if (column.width instanceof shared_1.SizeAndUnit && column.width.unit === Enums.SizeUnit.Weight) {
                totalWeight += column.width.physicalSize;
              }
            }
            for (var _b = 0, _c = this._columns; _b < _c.length; _b++) {
              var column = _c[_b];
              if (column.width instanceof shared_1.SizeAndUnit && column.width.unit === Enums.SizeUnit.Weight && totalWeight > 0) {
                var computedWeight = 100 / totalWeight * column.width.physicalSize;
                column["_computedWeight"] = computedWeight;
              }
              var renderedColumn = column.render();
              if (renderedColumn) {
                if (this._renderedColumns.length > 0 && column.separatorElement) {
                  column.separatorElement.style.flex = "0 0 auto";
                  Utils.appendChild(element, column.separatorElement);
                }
                Utils.appendChild(element, renderedColumn);
                this._renderedColumns.push(column);
              }
            }
            return this._renderedColumns.length > 0 ? element : void 0;
          } else {
            return void 0;
          }
        };
        ColumnSet2.prototype.truncateOverflow = function(maxHeight) {
          for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            column["handleOverflow"](maxHeight);
          }
          return true;
        };
        ColumnSet2.prototype.undoOverflowTruncation = function() {
          for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            column["resetOverflow"]();
          }
        };
        Object.defineProperty(ColumnSet2.prototype, "isSelectable", {
          get: function() {
            return true;
          },
          enumerable: false,
          configurable: true
        });
        ColumnSet2.prototype.internalParse = function(source, context) {
          _super.prototype.internalParse.call(this, source, context);
          this._columns = [];
          this._renderedColumns = [];
          var jsonColumns = source["columns"];
          if (Array.isArray(jsonColumns)) {
            for (var _i = 0, jsonColumns_1 = jsonColumns; _i < jsonColumns_1.length; _i++) {
              var item = jsonColumns_1[_i];
              var column = this.createColumnInstance(item, context);
              if (column) {
                this._columns.push(column);
              }
            }
          }
        };
        ColumnSet2.prototype.internalToJSON = function(target, context) {
          _super.prototype.internalToJSON.call(this, target, context);
          context.serializeArray(target, "columns", this._columns);
        };
        ColumnSet2.prototype.isFirstElement = function(element) {
          for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            if (column.isVisible) {
              return column === element;
            }
          }
          return false;
        };
        ColumnSet2.prototype.isBleedingAtTop = function() {
          if (this.isBleeding()) {
            return true;
          }
          if (this._renderedColumns && this._renderedColumns.length > 0) {
            for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
              var column = _a[_i];
              if (column.isBleedingAtTop()) {
                return true;
              }
            }
          }
          return false;
        };
        ColumnSet2.prototype.isBleedingAtBottom = function() {
          if (this.isBleeding()) {
            return true;
          }
          if (this._renderedColumns && this._renderedColumns.length > 0) {
            for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
              var column = _a[_i];
              if (column.isBleedingAtBottom()) {
                return true;
              }
            }
          }
          return false;
        };
        ColumnSet2.prototype.getItemCount = function() {
          return this._columns.length;
        };
        ColumnSet2.prototype.getFirstVisibleRenderedItem = function() {
          if (this.renderedElement && this._renderedColumns && this._renderedColumns.length > 0) {
            return this._renderedColumns[0];
          } else {
            return void 0;
          }
        };
        ColumnSet2.prototype.getLastVisibleRenderedItem = function() {
          if (this.renderedElement && this._renderedColumns && this._renderedColumns.length > 0) {
            return this._renderedColumns[this._renderedColumns.length - 1];
          } else {
            return void 0;
          }
        };
        ColumnSet2.prototype.getColumnAt = function(index) {
          return this._columns[index];
        };
        ColumnSet2.prototype.getItemAt = function(index) {
          return this.getColumnAt(index);
        };
        ColumnSet2.prototype.getJsonTypeName = function() {
          return "ColumnSet";
        };
        ColumnSet2.prototype.internalValidateProperties = function(context) {
          _super.prototype.internalValidateProperties.call(this, context);
          var weightedColumns = 0;
          var stretchedColumns = 0;
          for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            if (typeof column.width === "number") {
              weightedColumns++;
            } else if (column.width === "stretch") {
              stretchedColumns++;
            }
          }
          if (weightedColumns > 0 && stretchedColumns > 0) {
            context.addFailure(this, Enums.ValidationEvent.Hint, strings_1.Strings.hints.dontUseWeightedAndStrecthedColumnsInSameSet());
          }
        };
        ColumnSet2.prototype.addColumn = function(column) {
          if (!column.parent) {
            this._columns.push(column);
            column.setParent(this);
          } else {
            throw new Error(strings_1.Strings.errors.columnAlreadyBelongsToAnotherSet());
          }
        };
        ColumnSet2.prototype.removeItem = function(item) {
          if (item instanceof Column) {
            var itemIndex = this._columns.indexOf(item);
            if (itemIndex >= 0) {
              this._columns.splice(itemIndex, 1);
              item.setParent(void 0);
              this.updateLayout();
              return true;
            }
          }
          return false;
        };
        ColumnSet2.prototype.indexOf = function(cardElement) {
          return cardElement instanceof Column ? this._columns.indexOf(cardElement) : -1;
        };
        ColumnSet2.prototype.isLeftMostElement = function(element) {
          return this._columns.indexOf(element) === 0;
        };
        ColumnSet2.prototype.isRightMostElement = function(element) {
          return this._columns.indexOf(element) === this._columns.length - 1;
        };
        ColumnSet2.prototype.isTopElement = function(element) {
          return this._columns.indexOf(element) >= 0;
        };
        ColumnSet2.prototype.isBottomElement = function(element) {
          return this._columns.indexOf(element) >= 0;
        };
        ColumnSet2.prototype.getActionById = function(id) {
          var result = void 0;
          for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            result = column.getActionById(id);
            if (result) {
              break;
            }
          }
          return result;
        };
        Object.defineProperty(ColumnSet2.prototype, "bleed", {
          get: function() {
            return this.getBleed();
          },
          set: function(value) {
            this.setBleed(value);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(ColumnSet2.prototype, "padding", {
          get: function() {
            return this.getPadding();
          },
          set: function(value) {
            this.setPadding(value);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(ColumnSet2.prototype, "selectAction", {
          get: function() {
            return this._selectAction;
          },
          set: function(value) {
            this._selectAction = value;
          },
          enumerable: false,
          configurable: true
        });
        return ColumnSet2;
      }(ContainerBase)
    );
    exports.ColumnSet = ColumnSet;
    function raiseImageLoadedEvent(image) {
      var card = image.getRootElement();
      var onImageLoadedHandler = card && card.onImageLoaded ? card.onImageLoaded : AdaptiveCard.onImageLoaded;
      if (onImageLoadedHandler) {
        onImageLoadedHandler(image);
      }
    }
    function raiseAnchorClickedEvent(element, anchor, ev) {
      var card = element.getRootElement();
      var onAnchorClickedHandler = card && card.onAnchorClicked ? card.onAnchorClicked : AdaptiveCard.onAnchorClicked;
      return onAnchorClickedHandler !== void 0 ? onAnchorClickedHandler(element, anchor, ev) : false;
    }
    function raiseExecuteActionEvent(action) {
      var card = action.parent ? action.parent.getRootElement() : void 0;
      var onExecuteActionHandler = card && card.onExecuteAction ? card.onExecuteAction : AdaptiveCard.onExecuteAction;
      if (action.prepareForExecution() && onExecuteActionHandler) {
        onExecuteActionHandler(action);
      }
    }
    function raiseInlineCardExpandedEvent(action, isExpanded) {
      var card = action.parent ? action.parent.getRootElement() : void 0;
      var onInlineCardExpandedHandler = card && card.onInlineCardExpanded ? card.onInlineCardExpanded : AdaptiveCard.onInlineCardExpanded;
      if (onInlineCardExpandedHandler) {
        onInlineCardExpandedHandler(action, isExpanded);
      }
    }
    function raiseInputValueChangedEvent(input) {
      var card = input.getRootElement();
      var onInputValueChangedHandler = card && card.onInputValueChanged ? card.onInputValueChanged : AdaptiveCard.onInputValueChanged;
      if (onInputValueChangedHandler) {
        onInputValueChangedHandler(input);
      }
    }
    function raiseElementVisibilityChangedEvent(element, shouldUpdateLayout) {
      if (shouldUpdateLayout === void 0) {
        shouldUpdateLayout = true;
      }
      var rootElement = element.getRootElement();
      if (shouldUpdateLayout) {
        rootElement.updateLayout();
      }
      var card = rootElement;
      var onElementVisibilityChangedHandler = card && card.onElementVisibilityChanged ? card.onElementVisibilityChanged : AdaptiveCard.onElementVisibilityChanged;
      if (onElementVisibilityChangedHandler !== void 0) {
        onElementVisibilityChangedHandler(element);
      }
    }
    function raiseDisplayOverflowActionMenuEvent(action, target) {
      var card = action.parent ? action.parent.getRootElement() : void 0;
      var onDisplayOverflowActionMenuHandler = card && card.onDisplayOverflowActionMenu ? card.onDisplayOverflowActionMenu : AdaptiveCard.onDisplayOverflowActionMenu;
      return onDisplayOverflowActionMenuHandler !== void 0 ? onDisplayOverflowActionMenuHandler(action.getActions(), target) : false;
    }
    function raiseRenderOverflowActionsEvent(action, isAtRootLevelActions) {
      var card = action.parent ? action.parent.getRootElement() : void 0;
      var onRenderOverflowActionsHandler = card && card.onRenderOverflowActions ? card.onRenderOverflowActions : AdaptiveCard.onRenderOverflowActions;
      return onRenderOverflowActionsHandler !== void 0 ? onRenderOverflowActionsHandler(action.getActions(), isAtRootLevelActions) : false;
    }
    var ContainerWithActions = (
      /** @class */
      function(_super) {
        __extends(ContainerWithActions2, _super);
        function ContainerWithActions2() {
          var _this = _super.call(this) || this;
          _this._actionCollection = new ActionCollection(_this);
          return _this;
        }
        ContainerWithActions2.prototype.internalParse = function(source, context) {
          _super.prototype.internalParse.call(this, source, context);
          this.parseActions(source, context);
        };
        ContainerWithActions2.prototype.parseActions = function(source, context) {
          this._actionCollection.parse(source["actions"], context);
        };
        ContainerWithActions2.prototype.internalToJSON = function(target, context) {
          _super.prototype.internalToJSON.call(this, target, context);
          this._actionCollection.toJSON(target, "actions", context);
        };
        ContainerWithActions2.prototype.internalRender = function() {
          var element = _super.prototype.internalRender.call(this);
          if (element) {
            var renderedActions = this._actionCollection.render(this.hostConfig.actions.actionsOrientation);
            if (renderedActions) {
              Utils.appendChild(element, renderSeparation(this.hostConfig, {
                spacing: this.hostConfig.getEffectiveSpacing(this.hostConfig.actions.spacing)
              }, Enums.Orientation.Horizontal));
              Utils.appendChild(element, renderedActions);
            }
            if (this.renderIfEmpty) {
              return element;
            } else {
              return element.children.length > 0 ? element : void 0;
            }
          } else {
            return void 0;
          }
        };
        ContainerWithActions2.prototype.getHasExpandedAction = function() {
          if (this.renderedActionCount === 0) {
            return false;
          } else if (this.renderedActionCount === 1) {
            return this._actionCollection.expandedAction !== void 0 && !this.hostConfig.actions.preExpandSingleShowCardAction;
          } else {
            return this._actionCollection.expandedAction !== void 0;
          }
        };
        Object.defineProperty(ContainerWithActions2.prototype, "renderedActionCount", {
          get: function() {
            return this._actionCollection.renderedActionCount;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(ContainerWithActions2.prototype, "renderIfEmpty", {
          get: function() {
            return false;
          },
          enumerable: false,
          configurable: true
        });
        ContainerWithActions2.prototype.releaseDOMResources = function() {
          _super.prototype.releaseDOMResources.call(this);
          this._actionCollection.releaseDOMResources();
        };
        ContainerWithActions2.prototype.getActionCount = function() {
          return this._actionCollection.getActionCount();
        };
        ContainerWithActions2.prototype.getActionAt = function(index) {
          if (index >= 0 && index < this.getActionCount()) {
            return this._actionCollection.getActionAt(index);
          } else {
            return _super.prototype.getActionAt.call(this, index);
          }
        };
        ContainerWithActions2.prototype.getActionById = function(id) {
          var result = this._actionCollection.getActionById(id);
          return result ? result : _super.prototype.getActionById.call(this, id);
        };
        ContainerWithActions2.prototype.internalValidateProperties = function(context) {
          _super.prototype.internalValidateProperties.call(this, context);
          if (this._actionCollection) {
            this._actionCollection.validateProperties(context);
          }
        };
        ContainerWithActions2.prototype.isLastElement = function(element) {
          return _super.prototype.isLastElement.call(this, element) && this._actionCollection.getActionCount() === 0;
        };
        ContainerWithActions2.prototype.addAction = function(action) {
          this._actionCollection.addAction(action);
        };
        ContainerWithActions2.prototype.clear = function() {
          _super.prototype.clear.call(this);
          this._actionCollection.clear();
        };
        ContainerWithActions2.prototype.getAllInputs = function(processActions) {
          if (processActions === void 0) {
            processActions = true;
          }
          var result = _super.prototype.getAllInputs.call(this, processActions);
          if (processActions) {
            result.push.apply(result, this._actionCollection.getAllInputs(processActions));
          }
          return result;
        };
        ContainerWithActions2.prototype.getResourceInformation = function() {
          var result = _super.prototype.getResourceInformation.call(this);
          result.push.apply(result, this._actionCollection.getResourceInformation());
          return result;
        };
        ContainerWithActions2.prototype.isBleedingAtBottom = function() {
          if (this._actionCollection.renderedActionCount === 0) {
            return _super.prototype.isBleedingAtBottom.call(this);
          } else {
            if (this._actionCollection.getActionCount() === 1) {
              return this._actionCollection.expandedAction !== void 0 && !this.hostConfig.actions.preExpandSingleShowCardAction;
            } else {
              return this._actionCollection.expandedAction !== void 0;
            }
          }
        };
        ContainerWithActions2.prototype.getForbiddenActionNames = function() {
          return [];
        };
        Object.defineProperty(ContainerWithActions2.prototype, "isStandalone", {
          get: function() {
            return false;
          },
          enumerable: false,
          configurable: true
        });
        return ContainerWithActions2;
      }(Container)
    );
    exports.ContainerWithActions = ContainerWithActions;
    var RefreshActionProperty = (
      /** @class */
      function(_super) {
        __extends(RefreshActionProperty2, _super);
        function RefreshActionProperty2(targetVersion, name) {
          var _this = _super.call(this, targetVersion, name, void 0) || this;
          _this.targetVersion = targetVersion;
          _this.name = name;
          return _this;
        }
        RefreshActionProperty2.prototype.parse = function(sender, source, context) {
          var action = context.parseAction(sender.parent, source[this.name], [], false);
          if (action !== void 0) {
            if (action instanceof ExecuteAction) {
              return action;
            }
            context.logParseEvent(sender, Enums.ValidationEvent.ActionTypeNotAllowed, strings_1.Strings.errors.actionTypeNotAllowed(action.getJsonTypeName()));
          }
          context.logParseEvent(sender, Enums.ValidationEvent.PropertyCantBeNull, strings_1.Strings.errors.propertyMustBeSet("action"));
          return void 0;
        };
        RefreshActionProperty2.prototype.toJSON = function(sender, target, value, context) {
          context.serializeValue(target, this.name, value ? value.toJSON(context) : void 0, void 0, true);
        };
        return RefreshActionProperty2;
      }(serialization_1.PropertyDefinition)
    );
    exports.RefreshActionProperty = RefreshActionProperty;
    var RefreshDefinition = (
      /** @class */
      function(_super) {
        __extends(RefreshDefinition2, _super);
        function RefreshDefinition2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(RefreshDefinition2.prototype, "action", {
          get: function() {
            return this.getValue(RefreshDefinition2.actionProperty);
          },
          set: function(value) {
            this.setValue(RefreshDefinition2.actionProperty, value);
            if (value) {
              value.setParent(this.parent);
            }
          },
          enumerable: false,
          configurable: true
        });
        RefreshDefinition2.prototype.getSchemaKey = function() {
          return "RefreshDefinition";
        };
        RefreshDefinition2.actionProperty = new RefreshActionProperty(serialization_1.Versions.v1_4, "action");
        RefreshDefinition2.userIdsProperty = new serialization_1.StringArrayProperty(serialization_1.Versions.v1_4, "userIds");
        __decorate([
          (0, serialization_1.property)(RefreshDefinition2.actionProperty)
        ], RefreshDefinition2.prototype, "action", null);
        __decorate([
          (0, serialization_1.property)(RefreshDefinition2.userIdsProperty)
        ], RefreshDefinition2.prototype, "userIds", void 0);
        return RefreshDefinition2;
      }(serialization_1.SerializableObject)
    );
    exports.RefreshDefinition = RefreshDefinition;
    var AuthCardButton = (
      /** @class */
      function(_super) {
        __extends(AuthCardButton2, _super);
        function AuthCardButton2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        AuthCardButton2.prototype.getSchemaKey = function() {
          return "AuthCardButton";
        };
        AuthCardButton2.typeProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_4, "type");
        AuthCardButton2.titleProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_4, "title");
        AuthCardButton2.imageProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_4, "image");
        AuthCardButton2.valueProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_4, "value");
        __decorate([
          (0, serialization_1.property)(AuthCardButton2.typeProperty)
        ], AuthCardButton2.prototype, "type", void 0);
        __decorate([
          (0, serialization_1.property)(AuthCardButton2.titleProperty)
        ], AuthCardButton2.prototype, "title", void 0);
        __decorate([
          (0, serialization_1.property)(AuthCardButton2.imageProperty)
        ], AuthCardButton2.prototype, "image", void 0);
        __decorate([
          (0, serialization_1.property)(AuthCardButton2.valueProperty)
        ], AuthCardButton2.prototype, "value", void 0);
        return AuthCardButton2;
      }(serialization_1.SerializableObject)
    );
    exports.AuthCardButton = AuthCardButton;
    var TokenExchangeResource = (
      /** @class */
      function(_super) {
        __extends(TokenExchangeResource2, _super);
        function TokenExchangeResource2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        TokenExchangeResource2.prototype.getSchemaKey = function() {
          return "TokenExchangeResource";
        };
        TokenExchangeResource2.idProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_4, "id");
        TokenExchangeResource2.uriProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_4, "uri");
        TokenExchangeResource2.providerIdProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_4, "providerId");
        __decorate([
          (0, serialization_1.property)(TokenExchangeResource2.idProperty)
        ], TokenExchangeResource2.prototype, "id", void 0);
        __decorate([
          (0, serialization_1.property)(TokenExchangeResource2.uriProperty)
        ], TokenExchangeResource2.prototype, "uri", void 0);
        __decorate([
          (0, serialization_1.property)(TokenExchangeResource2.providerIdProperty)
        ], TokenExchangeResource2.prototype, "providerId", void 0);
        return TokenExchangeResource2;
      }(serialization_1.SerializableObject)
    );
    exports.TokenExchangeResource = TokenExchangeResource;
    var Authentication = (
      /** @class */
      function(_super) {
        __extends(Authentication2, _super);
        function Authentication2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        Authentication2.prototype.getSchemaKey = function() {
          return "Authentication";
        };
        Authentication2.textProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_4, "text");
        Authentication2.connectionNameProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_4, "connectionName");
        Authentication2.buttonsProperty = new serialization_1.SerializableObjectCollectionProperty(serialization_1.Versions.v1_4, "buttons", AuthCardButton);
        Authentication2.tokenExchangeResourceProperty = new serialization_1.SerializableObjectProperty(serialization_1.Versions.v1_4, "tokenExchangeResource", TokenExchangeResource, true);
        __decorate([
          (0, serialization_1.property)(Authentication2.textProperty)
        ], Authentication2.prototype, "text", void 0);
        __decorate([
          (0, serialization_1.property)(Authentication2.connectionNameProperty)
        ], Authentication2.prototype, "connectionName", void 0);
        __decorate([
          (0, serialization_1.property)(Authentication2.buttonsProperty)
        ], Authentication2.prototype, "buttons", void 0);
        __decorate([
          (0, serialization_1.property)(Authentication2.tokenExchangeResourceProperty)
        ], Authentication2.prototype, "tokenExchangeResource", void 0);
        return Authentication2;
      }(serialization_1.SerializableObject)
    );
    exports.Authentication = Authentication;
    var AdaptiveCard = (
      /** @class */
      function(_super) {
        __extends(AdaptiveCard2, _super);
        function AdaptiveCard2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.designMode = false;
          return _this;
        }
        Object.defineProperty(AdaptiveCard2.prototype, "refresh", {
          get: function() {
            return this.getValue(AdaptiveCard2.refreshProperty);
          },
          set: function(value) {
            this.setValue(AdaptiveCard2.refreshProperty, value);
            if (value) {
              value.parent = this;
            }
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(AdaptiveCard2, "processMarkdown", {
          get: function() {
            throw new Error(strings_1.Strings.errors.processMarkdownEventRemoved());
          },
          // eslint-disable-next-line @typescript-eslint/naming-convention
          set: function(_value) {
            throw new Error(strings_1.Strings.errors.processMarkdownEventRemoved());
          },
          enumerable: false,
          configurable: true
        });
        AdaptiveCard2.applyMarkdown = function(text) {
          var result = {
            didProcess: false
          };
          if (AdaptiveCard2.onProcessMarkdown) {
            AdaptiveCard2.onProcessMarkdown(text, result);
          } else if (window.markdownit) {
            var markdownIt = window.markdownit;
            result.outputHtml = markdownIt().render(text);
            result.didProcess = true;
          } else if (!AdaptiveCard2._haveWarnedAboutNoMarkdownProcessing) {
            console.warn(strings_1.Strings.errors.markdownProcessingNotEnabled);
            AdaptiveCard2._haveWarnedAboutNoMarkdownProcessing = true;
          }
          return result;
        };
        AdaptiveCard2.prototype.isVersionSupported = function() {
          if (this.bypassVersionCheck) {
            return true;
          } else {
            var unsupportedVersion = !this.version || !this.version.isValid || this.maxVersion.major < this.version.major || this.maxVersion.major === this.version.major && this.maxVersion.minor < this.version.minor;
            return !unsupportedVersion;
          }
        };
        AdaptiveCard2.prototype.getDefaultSerializationContext = function() {
          return new SerializationContext(this.version);
        };
        AdaptiveCard2.prototype.getItemsCollectionPropertyName = function() {
          return "body";
        };
        AdaptiveCard2.prototype.canHostSingletons = function() {
          return true;
        };
        AdaptiveCard2.prototype.internalParse = function(source, context) {
          this._fallbackCard = void 0;
          var fallbackElement = context.parseElement(void 0, source["fallback"], this.forbiddenChildElements(), !this.isDesignMode());
          if (fallbackElement) {
            this._fallbackCard = new AdaptiveCard2();
            this._fallbackCard.addItem(fallbackElement);
          }
          _super.prototype.internalParse.call(this, source, context);
        };
        AdaptiveCard2.prototype.internalToJSON = function(target, context) {
          this.setValue(AdaptiveCard2.versionProperty, context.targetVersion);
          _super.prototype.internalToJSON.call(this, target, context);
        };
        AdaptiveCard2.prototype.internalRender = function() {
          var renderedElement = _super.prototype.internalRender.call(this);
          if (shared_1.GlobalSettings.useAdvancedCardBottomTruncation && renderedElement) {
            renderedElement.style.removeProperty("minHeight");
          }
          return renderedElement;
        };
        AdaptiveCard2.prototype.getHasBackground = function(ignoreBackgroundImages) {
          if (ignoreBackgroundImages === void 0) {
            ignoreBackgroundImages = false;
          }
          return true;
        };
        AdaptiveCard2.prototype.getDefaultPadding = function() {
          return new shared_1.PaddingDefinition(Enums.Spacing.Padding, Enums.Spacing.Padding, Enums.Spacing.Padding, Enums.Spacing.Padding);
        };
        AdaptiveCard2.prototype.shouldSerialize = function(_context) {
          return true;
        };
        Object.defineProperty(AdaptiveCard2.prototype, "renderIfEmpty", {
          get: function() {
            return true;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(AdaptiveCard2.prototype, "bypassVersionCheck", {
          get: function() {
            return false;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(AdaptiveCard2.prototype, "allowCustomStyle", {
          get: function() {
            return this.hostConfig.adaptiveCard && this.hostConfig.adaptiveCard.allowCustomStyle;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(AdaptiveCard2.prototype, "hasBackground", {
          get: function() {
            return true;
          },
          enumerable: false,
          configurable: true
        });
        AdaptiveCard2.prototype.getJsonTypeName = function() {
          return "AdaptiveCard";
        };
        AdaptiveCard2.prototype.internalValidateProperties = function(context) {
          _super.prototype.internalValidateProperties.call(this, context);
          if (this.getValue(CardElement.typeNameProperty) !== "AdaptiveCard") {
            context.addFailure(this, Enums.ValidationEvent.MissingCardType, strings_1.Strings.errors.invalidCardType());
          }
          if (!this.bypassVersionCheck && !this.version) {
            context.addFailure(this, Enums.ValidationEvent.PropertyCantBeNull, strings_1.Strings.errors.propertyMustBeSet("version"));
          } else if (!this.isVersionSupported()) {
            context.addFailure(this, Enums.ValidationEvent.UnsupportedCardVersion, strings_1.Strings.errors.unsupportedCardVersion(this.version.toString(), this.maxVersion.toString()));
          }
        };
        AdaptiveCard2.prototype.render = function(target) {
          var renderedCard;
          if (this.shouldFallback() && this._fallbackCard) {
            this._fallbackCard.hostConfig = this.hostConfig;
            renderedCard = this._fallbackCard.render();
          } else {
            renderedCard = _super.prototype.render.call(this);
            if (renderedCard) {
              renderedCard.classList.add(this.hostConfig.makeCssClassName("ac-adaptiveCard"));
              if (shared_1.GlobalSettings.setTabIndexAtCardRoot) {
                renderedCard.tabIndex = 0;
              }
              if (this.speak) {
                renderedCard.setAttribute("aria-label", this.speak);
              }
            }
          }
          if (target) {
            Utils.appendChild(target, renderedCard);
            this.updateLayout();
          }
          return renderedCard;
        };
        AdaptiveCard2.prototype.updateLayout = function(processChildren) {
          if (processChildren === void 0) {
            processChildren = true;
          }
          _super.prototype.updateLayout.call(this, processChildren);
          if (shared_1.GlobalSettings.useAdvancedCardBottomTruncation && this.isDisplayed()) {
            var padding = this.hostConfig.getEffectiveSpacing(Enums.Spacing.Default);
            this["handleOverflow"](this.renderedElement.offsetHeight - padding);
          }
        };
        AdaptiveCard2.prototype.shouldFallback = function() {
          return _super.prototype.shouldFallback.call(this) || !this.isVersionSupported();
        };
        Object.defineProperty(AdaptiveCard2.prototype, "hasVisibleSeparator", {
          get: function() {
            return false;
          },
          enumerable: false,
          configurable: true
        });
        AdaptiveCard2.schemaUrl = "http://adaptivecards.io/schemas/adaptive-card.json";
        AdaptiveCard2.$schemaProperty = new serialization_1.CustomProperty(serialization_1.Versions.v1_0, "$schema", function(sender, property, source, context) {
          return AdaptiveCard2.schemaUrl;
        }, function(sender, prop, target, value, context) {
          context.serializeValue(target, prop.name, AdaptiveCard2.schemaUrl);
        });
        AdaptiveCard2.versionProperty = new serialization_1.CustomProperty(serialization_1.Versions.v1_0, "version", function(sender, prop, source, context) {
          var version = serialization_1.Version.parse(source[prop.name], context);
          if (version === void 0) {
            version = serialization_1.Versions.latest;
            context.logParseEvent(sender, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.invalidCardVersion(version.toString()));
          }
          return version;
        }, function(sender, prop, target, value, context) {
          if (value !== void 0) {
            context.serializeValue(target, prop.name, value.toString());
          }
        }, serialization_1.Versions.v1_0);
        AdaptiveCard2.fallbackTextProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "fallbackText");
        AdaptiveCard2.speakProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "speak");
        AdaptiveCard2.refreshProperty = new serialization_1.SerializableObjectProperty(serialization_1.Versions.v1_4, "refresh", RefreshDefinition, true);
        AdaptiveCard2.authenticationProperty = new serialization_1.SerializableObjectProperty(serialization_1.Versions.v1_4, "authentication", Authentication, true);
        AdaptiveCard2._haveWarnedAboutNoMarkdownProcessing = false;
        __decorate([
          (0, serialization_1.property)(AdaptiveCard2.versionProperty)
        ], AdaptiveCard2.prototype, "version", void 0);
        __decorate([
          (0, serialization_1.property)(AdaptiveCard2.fallbackTextProperty)
        ], AdaptiveCard2.prototype, "fallbackText", void 0);
        __decorate([
          (0, serialization_1.property)(AdaptiveCard2.speakProperty)
        ], AdaptiveCard2.prototype, "speak", void 0);
        __decorate([
          (0, serialization_1.property)(AdaptiveCard2.refreshProperty)
        ], AdaptiveCard2.prototype, "refresh", null);
        __decorate([
          (0, serialization_1.property)(AdaptiveCard2.authenticationProperty)
        ], AdaptiveCard2.prototype, "authentication", void 0);
        return AdaptiveCard2;
      }(ContainerWithActions)
    );
    exports.AdaptiveCard = AdaptiveCard;
    var InlineAdaptiveCard = (
      /** @class */
      function(_super) {
        __extends(InlineAdaptiveCard2, _super);
        function InlineAdaptiveCard2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.suppressStyle = false;
          return _this;
        }
        InlineAdaptiveCard2.prototype.getSchemaKey = function() {
          return "InlineAdaptiveCard";
        };
        InlineAdaptiveCard2.prototype.populateSchema = function(schema) {
          _super.prototype.populateSchema.call(this, schema);
          schema.remove(AdaptiveCard.$schemaProperty, AdaptiveCard.versionProperty);
        };
        InlineAdaptiveCard2.prototype.getDefaultPadding = function() {
          return new shared_1.PaddingDefinition(this.suppressStyle ? Enums.Spacing.None : Enums.Spacing.Padding, Enums.Spacing.Padding, this.suppressStyle ? Enums.Spacing.None : Enums.Spacing.Padding, Enums.Spacing.Padding);
        };
        Object.defineProperty(InlineAdaptiveCard2.prototype, "bypassVersionCheck", {
          get: function() {
            return true;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(InlineAdaptiveCard2.prototype, "defaultStyle", {
          get: function() {
            if (this.suppressStyle) {
              return Enums.ContainerStyle.Default;
            } else {
              return this.hostConfig.actions.showCard.style ? this.hostConfig.actions.showCard.style : Enums.ContainerStyle.Emphasis;
            }
          },
          enumerable: false,
          configurable: true
        });
        InlineAdaptiveCard2.prototype.render = function(target) {
          var renderedCard = _super.prototype.render.call(this, target);
          if (renderedCard) {
            renderedCard.setAttribute("aria-live", "polite");
            renderedCard.removeAttribute("tabindex");
          }
          return renderedCard;
        };
        return InlineAdaptiveCard2;
      }(AdaptiveCard)
    );
    var SerializationContext = (
      /** @class */
      function(_super) {
        __extends(SerializationContext2, _super);
        function SerializationContext2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this._forbiddenTypes = /* @__PURE__ */ new Set();
          return _this;
        }
        SerializationContext2.prototype.internalParseCardObject = function(parent, source, forbiddenTypes, allowFallback, createInstanceCallback, logParseEvent, parsingSingletonObject) {
          var _this = this;
          if (parsingSingletonObject === void 0) {
            parsingSingletonObject = false;
          }
          var result = void 0;
          if (source && typeof source === "object") {
            var oldForbiddenTypes_1 = /* @__PURE__ */ new Set();
            this._forbiddenTypes.forEach(function(type) {
              oldForbiddenTypes_1.add(type);
            });
            forbiddenTypes.forEach(function(type) {
              _this._forbiddenTypes.add(type);
            });
            var typeName = Utils.parseString(source["type"]);
            var ignoreForbiddenType = parsingSingletonObject && typeName === "Carousel";
            if (typeName && this._forbiddenTypes.has(typeName) && !ignoreForbiddenType) {
              logParseEvent(typeName, Enums.TypeErrorType.ForbiddenType);
            } else {
              var tryToFallback = false;
              result = createInstanceCallback(typeName);
              if (!result) {
                tryToFallback = shared_1.GlobalSettings.enableFallback && allowFallback;
                logParseEvent(typeName, Enums.TypeErrorType.UnknownType);
              } else {
                result.setParent(parent);
                result.parse(source, this);
                tryToFallback = shared_1.GlobalSettings.enableFallback && allowFallback && result.shouldFallback();
              }
              if (tryToFallback) {
                var fallback = source["fallback"];
                if (!fallback && parent) {
                  parent.setShouldFallback(true);
                }
                if (typeof fallback === "string" && fallback.toLowerCase() === "drop") {
                  result = void 0;
                } else if (typeof fallback === "object") {
                  result = this.internalParseCardObject(parent, fallback, forbiddenTypes, true, createInstanceCallback, logParseEvent);
                }
              }
            }
            this._forbiddenTypes = oldForbiddenTypes_1;
          }
          return result;
        };
        SerializationContext2.prototype.cardObjectParsed = function(o, source) {
          if (o instanceof Action && this.onParseAction) {
            this.onParseAction(o, source, this);
          } else if (o instanceof CardElement && this.onParseElement) {
            this.onParseElement(o, source, this);
          }
        };
        SerializationContext2.prototype.shouldSerialize = function(o) {
          if (o instanceof Action) {
            return this.actionRegistry.findByName(o.getJsonTypeName()) !== void 0;
          } else if (o instanceof CardElement) {
            return this.elementRegistry.findByName(o.getJsonTypeName()) !== void 0;
          } else {
            return true;
          }
        };
        SerializationContext2.prototype.parseCardObject = function(parent, source, forbiddenTypeNames, allowFallback, createInstanceCallback, logParseEvent, parsingSingletonObject) {
          if (parsingSingletonObject === void 0) {
            parsingSingletonObject = false;
          }
          var forbiddenTypes = new Set(forbiddenTypeNames);
          var result = this.internalParseCardObject(parent, source, forbiddenTypes, allowFallback, createInstanceCallback, logParseEvent, parsingSingletonObject);
          if (result !== void 0) {
            this.cardObjectParsed(result, source);
          }
          return result;
        };
        SerializationContext2.prototype.parseElement = function(parent, source, forbiddenTypes, allowFallback, _parsingSingletonObject) {
          var _this = this;
          if (_parsingSingletonObject === void 0) {
            _parsingSingletonObject = false;
          }
          return this.parseCardObject(parent, source, forbiddenTypes, allowFallback, function(typeName) {
            return _this.elementRegistry.createInstance(typeName, _this.targetVersion);
          }, function(typeName, errorType) {
            if (errorType === Enums.TypeErrorType.UnknownType) {
              _this.logParseEvent(void 0, Enums.ValidationEvent.UnknownElementType, strings_1.Strings.errors.unknownElementType(typeName));
            } else {
              _this.logParseEvent(void 0, Enums.ValidationEvent.ElementTypeNotAllowed, strings_1.Strings.errors.elementTypeNotAllowed(typeName));
            }
          }, _parsingSingletonObject);
        };
        SerializationContext2.prototype.parseAction = function(parent, source, forbiddenActionTypes, allowFallback) {
          var _this = this;
          return this.parseCardObject(parent, source, forbiddenActionTypes, allowFallback, function(typeName) {
            return _this.actionRegistry.createInstance(typeName, _this.targetVersion);
          }, function(typeName, errorType) {
            if (errorType === Enums.TypeErrorType.UnknownType) {
              _this.logParseEvent(void 0, Enums.ValidationEvent.UnknownActionType, strings_1.Strings.errors.unknownActionType(typeName));
            } else {
              _this.logParseEvent(void 0, Enums.ValidationEvent.ActionTypeNotAllowed, strings_1.Strings.errors.actionTypeNotAllowed(typeName));
            }
          });
        };
        Object.defineProperty(SerializationContext2.prototype, "elementRegistry", {
          get: function() {
            var _a;
            return (_a = this._elementRegistry) !== null && _a !== void 0 ? _a : registry_1.GlobalRegistry.elements;
          },
          enumerable: false,
          configurable: true
        });
        SerializationContext2.prototype.setElementRegistry = function(value) {
          this._elementRegistry = value;
        };
        Object.defineProperty(SerializationContext2.prototype, "actionRegistry", {
          get: function() {
            var _a;
            return (_a = this._actionRegistry) !== null && _a !== void 0 ? _a : registry_1.GlobalRegistry.actions;
          },
          enumerable: false,
          configurable: true
        });
        SerializationContext2.prototype.setActionRegistry = function(value) {
          this._actionRegistry = value;
        };
        return SerializationContext2;
      }(serialization_1.BaseSerializationContext)
    );
    exports.SerializationContext = SerializationContext;
    registry_1.GlobalRegistry.defaultElements.register("Container", Container);
    registry_1.GlobalRegistry.defaultElements.register("TextBlock", TextBlock);
    registry_1.GlobalRegistry.defaultElements.register("RichTextBlock", RichTextBlock, serialization_1.Versions.v1_2);
    registry_1.GlobalRegistry.defaultElements.register("TextRun", TextRun, serialization_1.Versions.v1_2);
    registry_1.GlobalRegistry.defaultElements.register("Image", Image);
    registry_1.GlobalRegistry.defaultElements.register("ImageSet", ImageSet);
    registry_1.GlobalRegistry.defaultElements.register("Media", Media, serialization_1.Versions.v1_1);
    registry_1.GlobalRegistry.defaultElements.register("FactSet", FactSet);
    registry_1.GlobalRegistry.defaultElements.register("ColumnSet", ColumnSet);
    registry_1.GlobalRegistry.defaultElements.register("ActionSet", ActionSet, serialization_1.Versions.v1_2);
    registry_1.GlobalRegistry.defaultElements.register("Input.Text", TextInput);
    registry_1.GlobalRegistry.defaultElements.register("Input.Date", DateInput);
    registry_1.GlobalRegistry.defaultElements.register("Input.Time", TimeInput);
    registry_1.GlobalRegistry.defaultElements.register("Input.Number", NumberInput);
    registry_1.GlobalRegistry.defaultElements.register("Input.ChoiceSet", ChoiceSetInput);
    registry_1.GlobalRegistry.defaultElements.register("Input.Toggle", ToggleInput);
    registry_1.GlobalRegistry.defaultActions.register(OpenUrlAction.JsonTypeName, OpenUrlAction);
    registry_1.GlobalRegistry.defaultActions.register(SubmitAction.JsonTypeName, SubmitAction);
    registry_1.GlobalRegistry.defaultActions.register(ShowCardAction.JsonTypeName, ShowCardAction);
    registry_1.GlobalRegistry.defaultActions.register(ToggleVisibilityAction.JsonTypeName, ToggleVisibilityAction, serialization_1.Versions.v1_2);
    registry_1.GlobalRegistry.defaultActions.register(ExecuteAction.JsonTypeName, ExecuteAction, serialization_1.Versions.v1_4);
  }
});

// node_modules/adaptivecards/lib/table.js
var require_table = __commonJS({
  "node_modules/adaptivecards/lib/table.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1; i >= 0; i--)
          if (d = decorators[i])
            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Table = exports.TableRow = exports.TableCell = exports.StylableContainer = exports.TableColumnDefinition = void 0;
    var card_elements_1 = require_card_elements();
    var enums_1 = require_enums();
    var registry_1 = require_registry();
    var serialization_1 = require_serialization();
    var shared_1 = require_shared();
    var strings_1 = require_strings();
    var utils_1 = require_utils();
    var TableColumnDefinition = (
      /** @class */
      function(_super) {
        __extends(TableColumnDefinition2, _super);
        function TableColumnDefinition2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.width = new shared_1.SizeAndUnit(1, enums_1.SizeUnit.Weight);
          return _this;
        }
        TableColumnDefinition2.prototype.getSchemaKey = function() {
          return "ColumnDefinition";
        };
        TableColumnDefinition2.horizontalCellContentAlignmentProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_5, "horizontalCellContentAlignment", enums_1.HorizontalAlignment);
        TableColumnDefinition2.verticalCellContentAlignmentProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_5, "verticalCellContentAlignment", enums_1.VerticalAlignment);
        TableColumnDefinition2.widthProperty = new serialization_1.CustomProperty(serialization_1.Versions.v1_5, "width", function(sender, prop, source, context) {
          var result = prop.defaultValue;
          var value = source[prop.name];
          var invalidWidth = false;
          if (typeof value === "number" && !isNaN(value)) {
            result = new shared_1.SizeAndUnit(value, enums_1.SizeUnit.Weight);
          } else if (typeof value === "string") {
            try {
              result = shared_1.SizeAndUnit.parse(value);
            } catch (e) {
              invalidWidth = true;
            }
          } else {
            invalidWidth = true;
          }
          if (invalidWidth) {
            context.logParseEvent(sender, enums_1.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.invalidColumnWidth(value));
          }
          return result;
        }, function(sender, property, target, value, context) {
          if (value.unit === enums_1.SizeUnit.Pixel) {
            context.serializeValue(target, "width", value.physicalSize + "px");
          } else {
            context.serializeNumber(target, "width", value.physicalSize);
          }
        }, new shared_1.SizeAndUnit(1, enums_1.SizeUnit.Weight));
        __decorate([
          (0, serialization_1.property)(TableColumnDefinition2.horizontalCellContentAlignmentProperty)
        ], TableColumnDefinition2.prototype, "horizontalCellContentAlignment", void 0);
        __decorate([
          (0, serialization_1.property)(TableColumnDefinition2.verticalCellContentAlignmentProperty)
        ], TableColumnDefinition2.prototype, "verticalCellContentAlignment", void 0);
        __decorate([
          (0, serialization_1.property)(TableColumnDefinition2.widthProperty)
        ], TableColumnDefinition2.prototype, "width", void 0);
        return TableColumnDefinition2;
      }(serialization_1.SerializableObject)
    );
    exports.TableColumnDefinition = TableColumnDefinition;
    var StylableContainer = (
      /** @class */
      function(_super) {
        __extends(StylableContainer2, _super);
        function StylableContainer2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this._items = [];
          return _this;
        }
        StylableContainer2.prototype.parseItem = function(source, context) {
          var _this = this;
          return context.parseCardObject(
            this,
            source,
            [],
            // Forbidden types not supported for elements for now
            !this.isDesignMode(),
            function(typeName) {
              return _this.createItemInstance(typeName);
            },
            function(typeName, _errorType) {
              context.logParseEvent(void 0, enums_1.ValidationEvent.ElementTypeNotAllowed, strings_1.Strings.errors.elementTypeNotAllowed(typeName));
            }
          );
        };
        StylableContainer2.prototype.internalAddItem = function(item) {
          if (!item.parent) {
            this._items.push(item);
            item.setParent(this);
          } else {
            throw new Error(strings_1.Strings.errors.elementAlreadyParented());
          }
        };
        StylableContainer2.prototype.internalRemoveItem = function(item) {
          var itemIndex = this._items.indexOf(item);
          if (itemIndex >= 0) {
            this._items.splice(itemIndex, 1);
            item.setParent(void 0);
            this.updateLayout();
            return true;
          }
          return false;
        };
        StylableContainer2.prototype.internalIndexOf = function(item) {
          return this._items.indexOf(item);
        };
        StylableContainer2.prototype.internalParse = function(source, context) {
          _super.prototype.internalParse.call(this, source, context);
          this._items = [];
          var items = source[this.getCollectionPropertyName()];
          if (Array.isArray(items)) {
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
              var item = items_1[_i];
              var instance = this.parseItem(item, context);
              if (instance) {
                this._items.push(instance);
              }
            }
          }
        };
        StylableContainer2.prototype.internalToJSON = function(target, context) {
          _super.prototype.internalToJSON.call(this, target, context);
          context.serializeArray(target, this.getCollectionPropertyName(), this._items);
        };
        StylableContainer2.prototype.removeItem = function(item) {
          return this.internalRemoveItem(item);
        };
        StylableContainer2.prototype.getItemCount = function() {
          return this._items.length;
        };
        StylableContainer2.prototype.getItemAt = function(index) {
          return this._items[index];
        };
        StylableContainer2.prototype.getFirstVisibleRenderedItem = function() {
          return this.getItemCount() > 0 ? this.getItemAt(0) : void 0;
        };
        StylableContainer2.prototype.getLastVisibleRenderedItem = function() {
          return this.getItemCount() > 0 ? this.getItemAt(this.getItemCount() - 1) : void 0;
        };
        return StylableContainer2;
      }(card_elements_1.StylableCardElementContainer)
    );
    exports.StylableContainer = StylableContainer;
    var TableCell = (
      /** @class */
      function(_super) {
        __extends(TableCell2, _super);
        function TableCell2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this._columnIndex = -1;
          _this._cellType = "data";
          return _this;
        }
        TableCell2.prototype.getHasBorder = function() {
          return this.parentRow.parentTable.showGridLines;
        };
        TableCell2.prototype.applyBorder = function() {
          if (this.renderedElement && this.getHasBorder()) {
            var styleDefinition = this.hostConfig.containerStyles.getStyleByName(this.parentRow.parentTable.gridStyle);
            if (styleDefinition.borderColor) {
              var borderColor = (0, utils_1.stringToCssColor)(styleDefinition.borderColor);
              if (borderColor) {
                this.renderedElement.style.borderRight = "1px solid " + borderColor;
                this.renderedElement.style.borderBottom = "1px solid " + borderColor;
              }
            }
          }
        };
        TableCell2.prototype.getDefaultPadding = function() {
          return this.getHasBackground() || this.getHasBorder() ? new shared_1.PaddingDefinition(enums_1.Spacing.Small, enums_1.Spacing.Small, enums_1.Spacing.Small, enums_1.Spacing.Small) : _super.prototype.getDefaultPadding.call(this);
        };
        TableCell2.prototype.internalRender = function() {
          var cellElement = _super.prototype.internalRender.call(this);
          if (cellElement) {
            cellElement.setAttribute("role", this.cellType === "data" ? "cell" : "columnheader");
            cellElement.style.minWidth = "0";
            if (this.cellType === "header") {
              cellElement.setAttribute("scope", "col");
            }
          }
          return cellElement;
        };
        TableCell2.prototype.shouldSerialize = function(_context) {
          return true;
        };
        TableCell2.prototype.getJsonTypeName = function() {
          return "TableCell";
        };
        TableCell2.prototype.getEffectiveTextStyleDefinition = function() {
          if (this.cellType === "header") {
            return this.hostConfig.textStyles.columnHeader;
          }
          return _super.prototype.getEffectiveTextStyleDefinition.call(this);
        };
        TableCell2.prototype.getEffectiveHorizontalAlignment = function() {
          if (this.horizontalAlignment !== void 0) {
            return this.horizontalAlignment;
          }
          if (this.parentRow.horizontalCellContentAlignment !== void 0) {
            return this.parentRow.horizontalCellContentAlignment;
          }
          if (this.columnIndex >= 0) {
            var horizontalAlignment = this.parentRow.parentTable.getColumnAt(this.columnIndex).horizontalCellContentAlignment;
            if (horizontalAlignment !== void 0) {
              return horizontalAlignment;
            }
          }
          if (this.parentRow.parentTable.horizontalCellContentAlignment !== void 0) {
            return this.parentRow.parentTable.horizontalCellContentAlignment;
          }
          return _super.prototype.getEffectiveHorizontalAlignment.call(this);
        };
        TableCell2.prototype.getEffectiveVerticalContentAlignment = function() {
          if (this.verticalContentAlignment !== void 0) {
            return this.verticalContentAlignment;
          }
          if (this.parentRow.verticalCellContentAlignment !== void 0) {
            return this.parentRow.verticalCellContentAlignment;
          }
          if (this.columnIndex >= 0) {
            var verticalAlignment = this.parentRow.parentTable.getColumnAt(this.columnIndex).verticalCellContentAlignment;
            if (verticalAlignment !== void 0) {
              return verticalAlignment;
            }
          }
          if (this.parentRow.parentTable.verticalCellContentAlignment !== void 0) {
            return this.parentRow.parentTable.verticalCellContentAlignment;
          }
          return _super.prototype.getEffectiveVerticalContentAlignment.call(this);
        };
        Object.defineProperty(TableCell2.prototype, "columnIndex", {
          get: function() {
            return this._columnIndex;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(TableCell2.prototype, "cellType", {
          get: function() {
            return this._cellType;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(TableCell2.prototype, "parentRow", {
          get: function() {
            return this.parent;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(TableCell2.prototype, "isStandalone", {
          get: function() {
            return false;
          },
          enumerable: false,
          configurable: true
        });
        return TableCell2;
      }(card_elements_1.Container)
    );
    exports.TableCell = TableCell;
    var TableRow = (
      /** @class */
      function(_super) {
        __extends(TableRow2, _super);
        function TableRow2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        TableRow2.prototype.getDefaultPadding = function() {
          return new shared_1.PaddingDefinition(enums_1.Spacing.None, enums_1.Spacing.None, enums_1.Spacing.None, enums_1.Spacing.None);
        };
        TableRow2.prototype.applyBackground = function() {
          if (this.renderedElement) {
            var styleDefinition = this.hostConfig.containerStyles.getStyleByName(this.style, this.hostConfig.containerStyles.getStyleByName(this.defaultStyle));
            if (styleDefinition.backgroundColor) {
              var bgColor = (0, utils_1.stringToCssColor)(styleDefinition.backgroundColor);
              if (bgColor) {
                this.renderedElement.style.backgroundColor = bgColor;
              }
            }
          }
        };
        TableRow2.prototype.getCollectionPropertyName = function() {
          return "cells";
        };
        TableRow2.prototype.createItemInstance = function(typeName) {
          return !typeName || typeName === "TableCell" ? new TableCell() : void 0;
        };
        TableRow2.prototype.internalRender = function() {
          var isFirstRow = this.getIsFirstRow();
          var cellSpacing = this.hostConfig.table.cellSpacing;
          var rowElement = document.createElement("div");
          rowElement.setAttribute("role", "row");
          rowElement.style.display = "flex";
          rowElement.style.flexDirection = "row";
          for (var i = 0; i < Math.min(this.getItemCount(), this.parentTable.getColumnCount()); i++) {
            var cell = this.getItemAt(i);
            cell["_columnIndex"] = i;
            cell["_cellType"] = this.parentTable.firstRowAsHeaders && isFirstRow ? "header" : "data";
            var renderedCell = cell.render();
            if (renderedCell) {
              var column = this.parentTable.getColumnAt(i);
              if (column.computedWidth.unit === enums_1.SizeUnit.Pixel) {
                renderedCell.style.flex = "0 0 " + column.computedWidth.physicalSize + "px";
              } else {
                renderedCell.style.flex = "1 1 " + column.computedWidth.physicalSize + "%";
              }
              if (i > 0 && !this.parentTable.showGridLines && cellSpacing > 0) {
                renderedCell.style.marginLeft = cellSpacing + "px";
              }
              rowElement.appendChild(renderedCell);
            }
          }
          return rowElement.children.length > 0 ? rowElement : void 0;
        };
        TableRow2.prototype.shouldSerialize = function(_context) {
          return true;
        };
        TableRow2.prototype.addCell = function(cell) {
          this.internalAddItem(cell);
        };
        TableRow2.prototype.removeCellAt = function(columnIndex) {
          if (columnIndex >= 0 && columnIndex < this.getItemCount()) {
            return this.removeItem(this.getItemAt(columnIndex));
          }
          return false;
        };
        TableRow2.prototype.indexOf = function(cardElement) {
          return cardElement instanceof TableCell ? this.internalIndexOf(cardElement) : -1;
        };
        TableRow2.prototype.ensureHasEnoughCells = function(cellCount) {
          while (this.getItemCount() < cellCount) {
            this.addCell(new TableCell());
          }
        };
        TableRow2.prototype.getJsonTypeName = function() {
          return "TableRow";
        };
        TableRow2.prototype.getIsFirstRow = function() {
          return this.parentTable.getItemAt(0) === this;
        };
        Object.defineProperty(TableRow2.prototype, "parentTable", {
          get: function() {
            return this.parent;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(TableRow2.prototype, "isStandalone", {
          get: function() {
            return false;
          },
          enumerable: false,
          configurable: true
        });
        TableRow2.styleProperty = new card_elements_1.ContainerStyleProperty(serialization_1.Versions.v1_5, "style");
        TableRow2.horizontalCellContentAlignmentProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_5, "horizontalCellContentAlignment", enums_1.HorizontalAlignment);
        TableRow2.verticalCellContentAlignmentProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_5, "verticalCellContentAlignment", enums_1.VerticalAlignment);
        __decorate([
          (0, serialization_1.property)(TableRow2.horizontalCellContentAlignmentProperty)
        ], TableRow2.prototype, "horizontalCellContentAlignment", void 0);
        __decorate([
          (0, serialization_1.property)(TableRow2.verticalCellContentAlignmentProperty)
        ], TableRow2.prototype, "verticalCellContentAlignment", void 0);
        return TableRow2;
      }(StylableContainer)
    );
    exports.TableRow = TableRow;
    var Table = (
      /** @class */
      function(_super) {
        __extends(Table2, _super);
        function Table2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this._columns = [];
          _this.firstRowAsHeaders = true;
          _this.showGridLines = true;
          return _this;
        }
        Object.defineProperty(Table2.prototype, "gridStyle", {
          get: function() {
            var style = this.getValue(Table2.gridStyleProperty);
            if (style && this.hostConfig.containerStyles.getStyleByName(style)) {
              return style;
            }
            return void 0;
          },
          set: function(value) {
            this.setValue(Table2.gridStyleProperty, value);
          },
          enumerable: false,
          configurable: true
        });
        Table2.prototype.ensureRowsHaveEnoughCells = function() {
          for (var i = 0; i < this.getItemCount(); i++) {
            this.getItemAt(i).ensureHasEnoughCells(this.getColumnCount());
          }
        };
        Table2.prototype.removeCellsFromColumn = function(columnIndex) {
          for (var i = 0; i < this.getItemCount(); i++) {
            this.getItemAt(i).removeCellAt(columnIndex);
          }
        };
        Table2.prototype.getCollectionPropertyName = function() {
          return "rows";
        };
        Table2.prototype.createItemInstance = function(typeName) {
          return !typeName || typeName === "TableRow" ? new TableRow() : void 0;
        };
        Table2.prototype.internalParse = function(source, context) {
          _super.prototype.internalParse.call(this, source, context);
          this.ensureRowsHaveEnoughCells();
        };
        Table2.prototype.internalRender = function() {
          if (this.getItemCount() > 0) {
            var totalWeights = 0;
            for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
              var column = _a[_i];
              if (column.width.unit === enums_1.SizeUnit.Weight) {
                totalWeights += column.width.physicalSize;
              }
            }
            for (var _b = 0, _c = this._columns; _b < _c.length; _b++) {
              var column = _c[_b];
              if (column.width.unit === enums_1.SizeUnit.Pixel) {
                column.computedWidth = new shared_1.SizeAndUnit(column.width.physicalSize, enums_1.SizeUnit.Pixel);
              } else {
                column.computedWidth = new shared_1.SizeAndUnit(100 / totalWeights * column.width.physicalSize, enums_1.SizeUnit.Weight);
              }
            }
            var tableElement = document.createElement("div");
            tableElement.setAttribute("role", "table");
            tableElement.style.display = "flex";
            tableElement.style.flexDirection = "column";
            if (this.showGridLines) {
              var styleDefinition = this.hostConfig.containerStyles.getStyleByName(this.gridStyle);
              if (styleDefinition.borderColor) {
                var borderColor = (0, utils_1.stringToCssColor)(styleDefinition.borderColor);
                if (borderColor) {
                  tableElement.style.borderTop = "1px solid " + borderColor;
                  tableElement.style.borderLeft = "1px solid " + borderColor;
                }
              }
            }
            var cellSpacing = this.hostConfig.table.cellSpacing;
            for (var i = 0; i < this.getItemCount(); i++) {
              var renderedRow = this.getItemAt(i).render();
              if (renderedRow) {
                if (i > 0 && !this.showGridLines && cellSpacing > 0) {
                  var separatorRow = document.createElement("div");
                  separatorRow.setAttribute("aria-hidden", "true");
                  separatorRow.style.height = cellSpacing + "px";
                  tableElement.appendChild(separatorRow);
                }
                tableElement.appendChild(renderedRow);
              }
            }
            return tableElement;
          }
          return void 0;
        };
        Table2.prototype.addColumn = function(column) {
          this._columns.push(column);
          this.ensureRowsHaveEnoughCells();
        };
        Table2.prototype.removeColumn = function(column) {
          var index = this._columns.indexOf(column);
          if (index >= 0) {
            this.removeCellsFromColumn(index);
            this._columns.splice(index, 1);
          }
        };
        Table2.prototype.getColumnCount = function() {
          return this._columns.length;
        };
        Table2.prototype.getColumnAt = function(index) {
          return this._columns[index];
        };
        Table2.prototype.addRow = function(row) {
          this.internalAddItem(row);
          row.ensureHasEnoughCells(this.getColumnCount());
        };
        Table2.prototype.indexOf = function(cardElement) {
          return cardElement instanceof TableRow ? this.internalIndexOf(cardElement) : -1;
        };
        Table2.prototype.getJsonTypeName = function() {
          return "Table";
        };
        Table2._columnsProperty = new serialization_1.SerializableObjectCollectionProperty(serialization_1.Versions.v1_5, "columns", TableColumnDefinition);
        Table2.firstRowAsHeadersProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_5, "firstRowAsHeaders", true);
        Table2.showGridLinesProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_5, "showGridLines", true);
        Table2.gridStyleProperty = new card_elements_1.ContainerStyleProperty(serialization_1.Versions.v1_5, "gridStyle");
        Table2.horizontalCellContentAlignmentProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_5, "horizontalCellContentAlignment", enums_1.HorizontalAlignment);
        Table2.verticalCellContentAlignmentProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_5, "verticalCellContentAlignment", enums_1.VerticalAlignment);
        __decorate([
          (0, serialization_1.property)(Table2._columnsProperty)
        ], Table2.prototype, "_columns", void 0);
        __decorate([
          (0, serialization_1.property)(Table2.firstRowAsHeadersProperty)
        ], Table2.prototype, "firstRowAsHeaders", void 0);
        __decorate([
          (0, serialization_1.property)(Table2.showGridLinesProperty)
        ], Table2.prototype, "showGridLines", void 0);
        __decorate([
          (0, serialization_1.property)(Table2.gridStyleProperty)
        ], Table2.prototype, "gridStyle", null);
        __decorate([
          (0, serialization_1.property)(Table2.horizontalCellContentAlignmentProperty)
        ], Table2.prototype, "horizontalCellContentAlignment", void 0);
        __decorate([
          (0, serialization_1.property)(Table2.verticalCellContentAlignmentProperty)
        ], Table2.prototype, "verticalCellContentAlignment", void 0);
        return Table2;
      }(StylableContainer)
    );
    exports.Table = Table;
    registry_1.GlobalRegistry.defaultElements.register("Table", Table, serialization_1.Versions.v1_5);
  }
});

// node_modules/adaptivecards/lib/channel-adapter.js
var require_channel_adapter = __commonJS({
  "node_modules/adaptivecards/lib/channel-adapter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChannelAdapter = void 0;
    var ChannelAdapter = (
      /** @class */
      /* @__PURE__ */ function() {
        function ChannelAdapter2() {
        }
        return ChannelAdapter2;
      }()
    );
    exports.ChannelAdapter = ChannelAdapter;
  }
});

// node_modules/adaptivecards/lib/activity-request.js
var require_activity_request = __commonJS({
  "node_modules/adaptivecards/lib/activity-request.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoginRequestResponse = exports.ErrorResponse = exports.SuccessResponse = exports.ActivityResponse = exports.ActivityRequestError = exports.ActivityRequestTrigger = void 0;
    var ActivityRequestTrigger;
    (function(ActivityRequestTrigger2) {
      ActivityRequestTrigger2["Automatic"] = "automatic";
      ActivityRequestTrigger2["Manual"] = "manual";
    })(ActivityRequestTrigger = exports.ActivityRequestTrigger || (exports.ActivityRequestTrigger = {}));
    var ActivityRequestError = (
      /** @class */
      /* @__PURE__ */ function() {
        function ActivityRequestError2(code, message) {
          this.code = code;
          this.message = message;
        }
        return ActivityRequestError2;
      }()
    );
    exports.ActivityRequestError = ActivityRequestError;
    var ActivityResponse = (
      /** @class */
      /* @__PURE__ */ function() {
        function ActivityResponse2(request) {
          this.request = request;
        }
        return ActivityResponse2;
      }()
    );
    exports.ActivityResponse = ActivityResponse;
    var SuccessResponse = (
      /** @class */
      function(_super) {
        __extends(SuccessResponse2, _super);
        function SuccessResponse2(request, rawContent) {
          var _this = _super.call(this, request) || this;
          _this.request = request;
          _this.rawContent = rawContent;
          return _this;
        }
        return SuccessResponse2;
      }(ActivityResponse)
    );
    exports.SuccessResponse = SuccessResponse;
    var ErrorResponse = (
      /** @class */
      function(_super) {
        __extends(ErrorResponse2, _super);
        function ErrorResponse2(request, error) {
          var _this = _super.call(this, request) || this;
          _this.request = request;
          _this.error = error;
          return _this;
        }
        return ErrorResponse2;
      }(ActivityResponse)
    );
    exports.ErrorResponse = ErrorResponse;
    var LoginRequestResponse = (
      /** @class */
      function(_super) {
        __extends(LoginRequestResponse2, _super);
        function LoginRequestResponse2(request, auth) {
          var _this = _super.call(this, request) || this;
          _this.request = request;
          _this._auth = auth;
          for (var _i = 0, _a = _this._auth.buttons; _i < _a.length; _i++) {
            var button = _a[_i];
            if (button.type === "signin" && button.value !== void 0) {
              try {
                new URL(button.value);
                _this.signinButton = button;
                break;
              } catch (e) {
              }
            }
          }
          return _this;
        }
        Object.defineProperty(LoginRequestResponse2.prototype, "tokenExchangeResource", {
          get: function() {
            return this._auth.tokenExchangeResource;
          },
          enumerable: false,
          configurable: true
        });
        return LoginRequestResponse2;
      }(ActivityResponse)
    );
    exports.LoginRequestResponse = LoginRequestResponse;
  }
});

// node_modules/adaptivecards/lib/adaptive-applet.js
var require_adaptive_applet = __commonJS({
  "node_modules/adaptivecards/lib/adaptive-applet.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AdaptiveApplet = void 0;
    var Enums = require_enums();
    var Utils = require_utils();
    var shared_1 = require_shared();
    var activity_request_1 = require_activity_request();
    var strings_1 = require_strings();
    var card_elements_1 = require_card_elements();
    var serialization_1 = require_serialization();
    function logEvent(level, message) {
      var optionalParams = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        optionalParams[_i - 2] = arguments[_i];
      }
      if (shared_1.GlobalSettings.applets.logEnabled) {
        if (shared_1.GlobalSettings.applets.onLogEvent) {
          shared_1.GlobalSettings.applets.onLogEvent(level, message, optionalParams);
        } else {
          switch (level) {
            case Enums.LogLevel.Warning:
              console.warn(message, optionalParams);
              break;
            case Enums.LogLevel.Error:
              console.error(message, optionalParams);
              break;
            default:
              console.log(message, optionalParams);
              break;
          }
        }
      }
    }
    var ActivityRequest = (
      /** @class */
      function() {
        function ActivityRequest2(action, trigger, consecutiveRefreshes) {
          this.action = action;
          this.trigger = trigger;
          this.consecutiveRefreshes = consecutiveRefreshes;
          this.attemptNumber = 0;
        }
        ActivityRequest2.prototype.retryAsync = function() {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              if (this.onSend) {
                this.onSend(this);
              }
              return [
                2
                /*return*/
              ];
            });
          });
        };
        return ActivityRequest2;
      }()
    );
    var AdaptiveApplet = (
      /** @class */
      function() {
        function AdaptiveApplet2() {
          this._allowAutomaticCardUpdate = false;
          this.renderedElement = document.createElement("div");
          this.renderedElement.className = "aaf-cardHost";
          this.renderedElement.style.position = "relative";
          this.renderedElement.style.display = "flex";
          this.renderedElement.style.flexDirection = "column";
          this._cardHostElement = document.createElement("div");
          this._refreshButtonHostElement = document.createElement("div");
          this._refreshButtonHostElement.className = "aaf-refreshButtonHost";
          this._refreshButtonHostElement.style.display = "none";
          this.renderedElement.appendChild(this._cardHostElement);
          this.renderedElement.appendChild(this._refreshButtonHostElement);
        }
        AdaptiveApplet2.prototype.displayCard = function(card) {
          if (card.renderedElement) {
            Utils.clearElementChildren(this._cardHostElement);
            this._refreshButtonHostElement.style.display = "none";
            this._cardHostElement.appendChild(card.renderedElement);
          } else {
            throw new Error("displayCard: undefined card.");
          }
        };
        AdaptiveApplet2.prototype.showManualRefreshButton = function(refreshAction) {
          var _this = this;
          var displayBuiltInManualRefreshButton = this.onShowManualRefreshButton ? this.onShowManualRefreshButton(this) : true;
          if (displayBuiltInManualRefreshButton) {
            this._refreshButtonHostElement.style.display = "none";
            var renderedRefreshButton = void 0;
            if (this.onRenderManualRefreshButton) {
              renderedRefreshButton = this.onRenderManualRefreshButton(this);
            } else {
              var message = strings_1.Strings.runtime.refreshThisCard();
              if (shared_1.GlobalSettings.applets.refresh.mode === Enums.RefreshMode.Automatic) {
                var autoRefreshPausedMessage = strings_1.Strings.runtime.automaticRefreshPaused();
                if (autoRefreshPausedMessage[autoRefreshPausedMessage.length - 1] !== " ") {
                  autoRefreshPausedMessage += " ";
                }
                message = strings_1.Strings.runtime.clckToRestartAutomaticRefresh();
              }
              var cardPayload = {
                type: "AdaptiveCard",
                version: "1.2",
                body: [
                  {
                    type: "RichTextBlock",
                    horizontalAlignment: "right",
                    inlines: [
                      {
                        type: "TextRun",
                        text: message,
                        selectAction: {
                          type: "Action.Submit",
                          id: "refreshCard"
                        }
                      }
                    ]
                  }
                ]
              };
              var card = new card_elements_1.AdaptiveCard();
              card.parse(cardPayload, new card_elements_1.SerializationContext(serialization_1.Versions.v1_2));
              card.onExecuteAction = function(action) {
                if (action.id === "refreshCard") {
                  Utils.clearElementChildren(_this._refreshButtonHostElement);
                  _this.internalExecuteAction(refreshAction, activity_request_1.ActivityRequestTrigger.Automatic, 0);
                }
              };
              renderedRefreshButton = card.render();
            }
            if (renderedRefreshButton) {
              Utils.clearElementChildren(this._refreshButtonHostElement);
              this._refreshButtonHostElement.appendChild(renderedRefreshButton);
              this._refreshButtonHostElement.style.removeProperty("display");
            }
          }
        };
        AdaptiveApplet2.prototype.createActivityRequest = function(action, trigger, consecutiveRefreshes) {
          var _this = this;
          if (this.card) {
            var request_1 = new ActivityRequest(action, trigger, consecutiveRefreshes);
            request_1.onSend = function(sender) {
              sender.attemptNumber++;
              void _this.internalSendActivityRequestAsync(request_1);
            };
            var cancel = this.onPrepareActivityRequest ? !this.onPrepareActivityRequest(this, request_1, action) : false;
            return cancel ? void 0 : request_1;
          } else {
            throw new Error("createActivityRequest: no card has been set.");
          }
        };
        AdaptiveApplet2.prototype.createMagicCodeInputCard = function(attemptNumber) {
          var payload = {
            type: "AdaptiveCard",
            version: "1.0",
            body: [
              {
                type: "TextBlock",
                color: "attention",
                text: attemptNumber === 1 ? void 0 : "That didn't work... let's try again.",
                wrap: true,
                horizontalAlignment: "center"
              },
              {
                type: "TextBlock",
                text: 'Please login in the popup. You will obtain a magic code. Paste that code below and select "Submit"',
                wrap: true,
                horizontalAlignment: "center"
              },
              {
                type: "Input.Text",
                id: "magicCode",
                placeholder: "Enter magic code"
              },
              {
                type: "ActionSet",
                horizontalAlignment: "center",
                actions: [
                  {
                    type: "Action.Submit",
                    id: AdaptiveApplet2._submitMagicCodeActionId,
                    title: "Submit"
                  },
                  {
                    type: "Action.Submit",
                    id: AdaptiveApplet2._cancelMagicCodeAuthActionId,
                    title: "Cancel"
                  }
                ]
              }
            ]
          };
          var card = new card_elements_1.AdaptiveCard();
          card.parse(payload);
          return card;
        };
        AdaptiveApplet2.prototype.cancelAutomaticRefresh = function() {
          if (this._allowAutomaticCardUpdate) {
            logEvent(Enums.LogLevel.Warning, "Automatic card refresh has been cancelled as a result of the user interacting with the card.");
          }
          this._allowAutomaticCardUpdate = false;
        };
        AdaptiveApplet2.prototype.createSerializationContext = function() {
          return this.onCreateSerializationContext ? this.onCreateSerializationContext(this) : new card_elements_1.SerializationContext();
        };
        AdaptiveApplet2.prototype.internalSetCard = function(payload, consecutiveRefreshes) {
          var _this = this;
          if (typeof payload === "object" && payload["type"] === "AdaptiveCard") {
            this._cardPayload = payload;
          }
          if (this._cardPayload) {
            try {
              var card = new card_elements_1.AdaptiveCard();
              if (this.hostConfig) {
                card.hostConfig = this.hostConfig;
              }
              var serializationContext = this.createSerializationContext();
              card.parse(this._cardPayload, serializationContext);
              var doChangeCard = this.onCardChanging ? this.onCardChanging(this, this._cardPayload) : true;
              if (doChangeCard) {
                this._card = card;
                if (this._card.authentication && this._card.authentication.tokenExchangeResource && this.onPrefetchSSOToken) {
                  this.onPrefetchSSOToken(this, this._card.authentication.tokenExchangeResource);
                }
                this._card.onExecuteAction = function(action) {
                  _this.cancelAutomaticRefresh();
                  _this.internalExecuteAction(action, activity_request_1.ActivityRequestTrigger.Manual, 0);
                };
                this._card.onInputValueChanged = function(_input) {
                  _this.cancelAutomaticRefresh();
                };
                this._card.render();
                if (this._card.renderedElement) {
                  this.displayCard(this._card);
                  if (this.onCardChanged) {
                    this.onCardChanged(this);
                  }
                  if (this._card.refresh) {
                    if (shared_1.GlobalSettings.applets.refresh.mode === Enums.RefreshMode.Automatic && consecutiveRefreshes < shared_1.GlobalSettings.applets.refresh.maximumConsecutiveAutomaticRefreshes) {
                      if (shared_1.GlobalSettings.applets.refresh.timeBetweenAutomaticRefreshes <= 0) {
                        logEvent(Enums.LogLevel.Info, "Triggering automatic card refresh number " + (consecutiveRefreshes + 1));
                        this.internalExecuteAction(this._card.refresh.action, activity_request_1.ActivityRequestTrigger.Automatic, consecutiveRefreshes + 1);
                      } else {
                        logEvent(Enums.LogLevel.Info, "Scheduling automatic card refresh number " + (consecutiveRefreshes + 1) + " in " + shared_1.GlobalSettings.applets.refresh.timeBetweenAutomaticRefreshes + "ms");
                        var action_1 = this._card.refresh.action;
                        this._allowAutomaticCardUpdate = true;
                        window.setTimeout(function() {
                          if (_this._allowAutomaticCardUpdate) {
                            _this.internalExecuteAction(action_1, activity_request_1.ActivityRequestTrigger.Automatic, consecutiveRefreshes + 1);
                          }
                        }, shared_1.GlobalSettings.applets.refresh.timeBetweenAutomaticRefreshes);
                      }
                    } else if (shared_1.GlobalSettings.applets.refresh.mode !== Enums.RefreshMode.Disabled) {
                      if (consecutiveRefreshes > 0) {
                        logEvent(Enums.LogLevel.Warning, "Stopping automatic refreshes after " + consecutiveRefreshes + " consecutive refreshes.");
                      } else {
                        logEvent(Enums.LogLevel.Warning, "The card has a refresh section, but automatic refreshes are disabled.");
                      }
                      if (shared_1.GlobalSettings.applets.refresh.allowManualRefreshesAfterAutomaticRefreshes || shared_1.GlobalSettings.applets.refresh.mode === Enums.RefreshMode.Manual) {
                        logEvent(Enums.LogLevel.Info, "Showing manual refresh button.");
                        this.showManualRefreshButton(this._card.refresh.action);
                      }
                    }
                  }
                }
              }
            } catch (error) {
              logEvent(Enums.LogLevel.Error, "setCard: " + error);
            }
          }
        };
        AdaptiveApplet2.prototype.internalExecuteAction = function(action, trigger, consecutiveRefreshes) {
          if (action instanceof card_elements_1.ExecuteAction) {
            if (this.channelAdapter) {
              var request = this.createActivityRequest(action, trigger, consecutiveRefreshes);
              if (request) {
                void request.retryAsync();
              }
            } else {
              throw new Error("internalExecuteAction: No channel adapter set.");
            }
          }
          if (this.onAction) {
            this.onAction(this, action);
          }
        };
        AdaptiveApplet2.prototype.createProgressOverlay = function(request) {
          if (!this._progressOverlay) {
            if (this.onCreateProgressOverlay) {
              this._progressOverlay = this.onCreateProgressOverlay(this, request);
            } else {
              this._progressOverlay = document.createElement("div");
              this._progressOverlay.className = "aaf-progress-overlay";
              var spinner = document.createElement("div");
              spinner.className = "aaf-spinner";
              spinner.style.width = "28px";
              spinner.style.height = "28px";
              this._progressOverlay.appendChild(spinner);
            }
          }
          return this._progressOverlay;
        };
        AdaptiveApplet2.prototype.removeProgressOverlay = function(request) {
          if (this.onRemoveProgressOverlay) {
            this.onRemoveProgressOverlay(this, request);
          }
          if (this._progressOverlay !== void 0) {
            this.renderedElement.removeChild(this._progressOverlay);
            this._progressOverlay = void 0;
          }
        };
        AdaptiveApplet2.prototype.activityRequestSucceeded = function(response, parsedContent) {
          if (this.onActivityRequestSucceeded) {
            this.onActivityRequestSucceeded(this, response, parsedContent);
          }
        };
        AdaptiveApplet2.prototype.activityRequestFailed = function(response) {
          return this.onActivityRequestFailed ? this.onActivityRequestFailed(this, response) : shared_1.GlobalSettings.applets.defaultTimeBetweenRetryAttempts;
        };
        AdaptiveApplet2.prototype.showAuthCodeInputDialog = function(request) {
          var _this = this;
          var showBuiltInAuthCodeInputCard = this.onShowAuthCodeInputDialog ? this.onShowAuthCodeInputDialog(this, request) : true;
          if (showBuiltInAuthCodeInputCard) {
            var authCodeInputCard = this.createMagicCodeInputCard(request.attemptNumber);
            authCodeInputCard.render();
            authCodeInputCard.onExecuteAction = function(submitMagicCodeAction) {
              if (_this.card && submitMagicCodeAction instanceof card_elements_1.SubmitAction) {
                switch (submitMagicCodeAction.id) {
                  case AdaptiveApplet2._submitMagicCodeActionId:
                    var authCode = void 0;
                    if (submitMagicCodeAction.data && typeof submitMagicCodeAction.data["magicCode"] === "string") {
                      authCode = submitMagicCodeAction.data["magicCode"];
                    }
                    if (authCode) {
                      _this.displayCard(_this.card);
                      request.authCode = authCode;
                      void request.retryAsync();
                    } else {
                      alert("Please enter the magic code you received.");
                    }
                    break;
                  case AdaptiveApplet2._cancelMagicCodeAuthActionId:
                    logEvent(Enums.LogLevel.Warning, "Authentication cancelled by user.");
                    _this.displayCard(_this.card);
                    break;
                  default:
                    logEvent(Enums.LogLevel.Error, "Unexpected action taken from magic code input card (id = " + submitMagicCodeAction.id + ")");
                    alert(strings_1.Strings.magicCodeInputCard.somethingWentWrong());
                    break;
                }
              }
            };
            this.displayCard(authCodeInputCard);
          }
        };
        AdaptiveApplet2.prototype.internalSendActivityRequestAsync = function(request) {
          return __awaiter(this, void 0, void 0, function() {
            var overlay, done, _loop_1, this_1, state_1;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (!this.channelAdapter) {
                    throw new Error("internalSendActivityRequestAsync: channelAdapter is not set.");
                  }
                  overlay = this.createProgressOverlay(request);
                  if (overlay !== void 0) {
                    this.renderedElement.appendChild(overlay);
                  }
                  done = false;
                  _loop_1 = function() {
                    var response, error_1, parsedContent, retryIn_1, attemptOAuth, left, top_1;
                    return __generator(this, function(_b) {
                      switch (_b.label) {
                        case 0:
                          response = void 0;
                          if (request.attemptNumber === 1) {
                            logEvent(Enums.LogLevel.Info, "Sending activity request to channel (attempt " + request.attemptNumber + ")");
                          } else {
                            logEvent(Enums.LogLevel.Info, "Re-sending activity request to channel (attempt " + request.attemptNumber + ")");
                          }
                          _b.label = 1;
                        case 1:
                          _b.trys.push([1, 3, , 4]);
                          return [4, this_1.channelAdapter.sendRequestAsync(request)];
                        case 2:
                          response = _b.sent();
                          return [3, 4];
                        case 3:
                          error_1 = _b.sent();
                          logEvent(Enums.LogLevel.Error, "Activity request failed: " + error_1);
                          this_1.removeProgressOverlay(request);
                          done = true;
                          return [3, 4];
                        case 4:
                          if (!response)
                            return [3, 10];
                          if (!(response instanceof activity_request_1.SuccessResponse))
                            return [3, 5];
                          this_1.removeProgressOverlay(request);
                          if (response.rawContent === void 0) {
                            throw new Error("internalSendActivityRequestAsync: Action.Execute result is undefined");
                          }
                          parsedContent = response.rawContent;
                          try {
                            parsedContent = JSON.parse(response.rawContent);
                          } catch (_c) {
                          }
                          if (typeof parsedContent === "string") {
                            logEvent(Enums.LogLevel.Info, "The activity request returned a string after " + request.attemptNumber + " attempt(s).");
                            this_1.activityRequestSucceeded(response, parsedContent);
                          } else if (typeof parsedContent === "object" && parsedContent["type"] === "AdaptiveCard") {
                            logEvent(Enums.LogLevel.Info, "The activity request returned an Adaptive Card after " + request.attemptNumber + " attempt(s).");
                            this_1.internalSetCard(parsedContent, request.consecutiveRefreshes);
                            this_1.activityRequestSucceeded(response, this_1.card);
                          } else {
                            throw new Error("internalSendActivityRequestAsync: Action.Execute result is of unsupported type (" + typeof response.rawContent + ")");
                          }
                          done = true;
                          return [3, 10];
                        case 5:
                          if (!(response instanceof activity_request_1.ErrorResponse))
                            return [3, 9];
                          retryIn_1 = this_1.activityRequestFailed(response);
                          if (!(retryIn_1 >= 0 && request.attemptNumber < shared_1.GlobalSettings.applets.maximumRetryAttempts))
                            return [3, 7];
                          logEvent(Enums.LogLevel.Warning, "Activity request failed: ".concat(response.error.message, ". Retrying in ").concat(retryIn_1, "ms"));
                          request.attemptNumber++;
                          return [4, new Promise(function(resolve, _reject) {
                            window.setTimeout(function() {
                              resolve();
                            }, retryIn_1);
                          })];
                        case 6:
                          _b.sent();
                          return [3, 8];
                        case 7:
                          logEvent(Enums.LogLevel.Error, "Activity request failed: ".concat(response.error.message, ". Giving up after ").concat(request.attemptNumber, " attempt(s)"));
                          this_1.removeProgressOverlay(request);
                          done = true;
                          _b.label = 8;
                        case 8:
                          return [3, 10];
                        case 9:
                          if (response instanceof activity_request_1.LoginRequestResponse) {
                            logEvent(Enums.LogLevel.Info, "The activity request returned a LoginRequestResponse after " + request.attemptNumber + " attempt(s).");
                            if (request.attemptNumber <= shared_1.GlobalSettings.applets.maximumRetryAttempts) {
                              attemptOAuth = true;
                              if (response.tokenExchangeResource && this_1.onSSOTokenNeeded) {
                                attemptOAuth = !this_1.onSSOTokenNeeded(this_1, request, response.tokenExchangeResource);
                              }
                              if (attemptOAuth) {
                                this_1.removeProgressOverlay(request);
                                if (response.signinButton === void 0) {
                                  throw new Error("internalSendActivityRequestAsync: the login request doesn't contain a valid signin URL.");
                                }
                                logEvent(Enums.LogLevel.Info, "Login required at " + response.signinButton.value);
                                if (this_1.onShowSigninPrompt) {
                                  this_1.onShowSigninPrompt(this_1, request, response.signinButton);
                                } else {
                                  this_1.showAuthCodeInputDialog(request);
                                  left = window.screenX + (window.outerWidth - shared_1.GlobalSettings.applets.authPromptWidth) / 2;
                                  top_1 = window.screenY + (window.outerHeight - shared_1.GlobalSettings.applets.authPromptHeight) / 2;
                                  window.open(response.signinButton.value, response.signinButton.title ? response.signinButton.title : "Sign in", "width=".concat(shared_1.GlobalSettings.applets.authPromptWidth, ",height=").concat(shared_1.GlobalSettings.applets.authPromptHeight, ",left=").concat(left, ",top=").concat(top_1));
                                }
                              }
                            } else {
                              logEvent(Enums.LogLevel.Error, "Authentication failed. Giving up after " + request.attemptNumber + " attempt(s)");
                              alert(strings_1.Strings.magicCodeInputCard.authenticationFailed());
                            }
                            return [2, "break"];
                          } else {
                            throw new Error("Unhandled response type: " + JSON.stringify(response));
                          }
                          _b.label = 10;
                        case 10:
                          return [
                            2
                            /*return*/
                          ];
                      }
                    });
                  };
                  this_1 = this;
                  _a.label = 1;
                case 1:
                  if (!!done)
                    return [3, 3];
                  return [5, _loop_1()];
                case 2:
                  state_1 = _a.sent();
                  if (state_1 === "break")
                    return [3, 3];
                  return [3, 1];
                case 3:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        AdaptiveApplet2.prototype.refreshCard = function() {
          if (this._card && this._card.refresh) {
            this.internalExecuteAction(this._card.refresh.action, activity_request_1.ActivityRequestTrigger.Manual, 0);
          }
        };
        AdaptiveApplet2.prototype.setCard = function(payload) {
          this.internalSetCard(payload, 0);
        };
        Object.defineProperty(AdaptiveApplet2.prototype, "card", {
          get: function() {
            return this._card;
          },
          enumerable: false,
          configurable: true
        });
        AdaptiveApplet2._submitMagicCodeActionId = "submitMagicCode";
        AdaptiveApplet2._cancelMagicCodeAuthActionId = "cancelMagicCodeAuth";
        return AdaptiveApplet2;
      }()
    );
    exports.AdaptiveApplet = AdaptiveApplet;
  }
});

// node_modules/adaptivecards/lib/adaptivecards.js
var require_adaptivecards = __commonJS({
  "node_modules/adaptivecards/lib/adaptivecards.js"(exports) {
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_strings(), exports);
    __exportStar(require_enums(), exports);
    __exportStar(require_shared(), exports);
    __exportStar(require_utils(), exports);
    __exportStar(require_serialization(), exports);
    __exportStar(require_host_capabilities(), exports);
    __exportStar(require_host_config(), exports);
    __exportStar(require_registry(), exports);
    __exportStar(require_card_object(), exports);
    __exportStar(require_card_elements(), exports);
    __exportStar(require_table(), exports);
    __exportStar(require_channel_adapter(), exports);
    __exportStar(require_activity_request(), exports);
    __exportStar(require_adaptive_applet(), exports);
  }
});
export default require_adaptivecards();
/*! Bundled license information:

adaptivecards/lib/shared.js:
  (**
   * Fast UUID generator, RFC4122 version 4 compliant.
   * @author Jeff Ward (jcward.com).
   * @license MIT license
   * @link http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
   **)
*/
//# sourceMappingURL=adaptivecards.js.map
