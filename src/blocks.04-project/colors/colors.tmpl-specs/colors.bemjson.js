module.exports = [
    {cls: 'container  mb-60', content: [
        {block: 'colors', content: [
                    {elem: 'title', content: 'Цвета'},
                    {elem: 'inner', content: [
                            [...new Array(9)].map((val, index) => {
                               return {elem: `item${index + 1}`};
                            }),
                        ]},
                ]},
        ]},
];
