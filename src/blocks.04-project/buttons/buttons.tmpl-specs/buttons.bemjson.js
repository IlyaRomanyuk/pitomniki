module.exports = [
    {cls: 'container', content: [
            {block: 'buttons', content: [
                    {elem: 'title', content: 'Кнопки'},
                    {elem: 'label', content: 'l-size'},
                    {elem: 'inner', content: [
                            {cls: 'row', content: [
                                    {elem: 'item', cls: 'col-md-6', content: [
                                            {block: 'button', content: `Normal`, cls: 'btn'},
                                            {block: 'button', mods: {'hover': true}, content: `Hover`, cls: 'btn'},
                                            {block: 'button', mods: {'hover': true}, content: `O`, cls: 'btn'},
                                            {block: 'button', mods: {'disabled': true}, content: `Disabled`, cls: 'btn'},
                                        ]},

                                    {elem: 'item', cls: 'col-md-6', content: [
                                            {block: 'button', mods: {'normal': true}, content: `Normal`, cls: 'btn'},
                                            {block: 'button', mods: {'hover': true}, content: `Hover`, cls: 'btn'},
                                            {block: 'button', mods: {'hover': true}, content: `O`, cls: 'btn'},
                                            {block: 'button', mods: {'disabledOpacity': true}, content: `Disabled`, cls: 'btn'},
                                        ]},
                                ]},
                        ]},
                    {elem: 'label', content: 'm-size'},
                    {elem: 'inner', content: [
                            {cls: 'row', content: [
                                    {elem: 'item', cls: 'col-md-6', content: [
                                            {block: 'button', content: `Normal`, cls: 'btn'},
                                            {block: 'button', mods: {'hover': true}, content: `Hover`, cls: 'btn'},
                                            {block: 'button', mods: {'hover': true}, content: `O`, cls: 'btn'},
                                            {block: 'button', mods: {'disabled': true}, content: `Disabled`, cls: 'btn'},
                                        ]},

                                    {elem: 'item', cls: 'col-md-6', content: [
                                            {block: 'button', mods: {'normal': true}, content: `Normal`, cls: 'btn'},
                                            {block: 'button', mods: {'hover': true}, content: `Hover`, cls: 'btn'},
                                            {block: 'button', mods: {'hover': true}, content: `O`, cls: 'btn'},
                                            {block: 'button', mods: {'disabledOpacity': true}, content: `Disabled`, cls: 'btn'},
                                        ]},
                                ]},
                        ]},
                ]},
        ]},
];
