
(function () {
    var Menu = function () {
        function Menu(element, options) {
            this._element = element;
            this._options = options;
            this._submenu = element.find('.sub.menu');
            this._items = element.find(".menu.tabs > .item > a")
            this._dropdowns = element.find(".dropdown")
            this._dropdowns_toggles = element.find(".dropdown .dropdown-toggle")

            if (this._submenu) {
                this.adjustMargin();
                this._addEventListeners();
            }

        } // Getters

        var _proto = Menu.prototype;

        // Public
        _proto.adjustMargin = function adjustMargin() {
            var sub = $(this._element).find('.item.active .sub.menu');

            if (sub.length > 0) {
                var offset = $(window).height() - sub.offset().top - 50;
                var margin = sub && sub.outerHeight();
                var maxMargin = Math.min(margin, offset);

                sub && sub.css('max-height', offset + 'px')
                margin && $(this._element).css('margin-bottom', maxMargin + 'px');
            }
        }

        _proto.activateTab = function activateTab(tab) {
            $(tab).closest('.menu.tabs').find('> .item.active').removeClass('active')
            $(tab).parent().addClass('active')
        }

        _proto.activateDropdown = function activateDropdown(dropdown) {
            let p = $(dropdown).parent();
            let isActive = p.hasClass('active');

            this.closeDropdowns();

            !isActive && p.addClass('active')
            // p.hasClass('active') ? p.removeClass('active') : p.addClass('active')
        }

        _proto.closeDropdowns = function activateDropdown() {
            this._dropdowns.each((idx, element) => {
                element = $(element)
                element.hasClass('active') && element.removeClass('active')
            });
        }

        _proto._addEventListeners = function _addEventListeners() {
            var _this = this;

            $(this._items).on('click', function (event) {
                _this.activateTab(this);
                _this.adjustMargin();
            });

            $(this._dropdowns_toggles).on('click', function (event) {
                _this.activateDropdown(this);
            });

            $(document).on("click", function (event) {
                // Close all active dropdown if click outside a dropdown
                if ($(event.target).is(".dropdown") === false && !$(event.target).parents('.dropdown').length) {
                    _this.closeDropdowns();
                }
            });
        };

        return Menu;
    }();

    // Expose to global namespace
    window.Menu = Menu;
})();  