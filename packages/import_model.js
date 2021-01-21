exports.model = [/*
                    ['model_A', ['id', 'name', 'last_name']],
                    ['model_B', ['id', { name: 'title', required: true }, { name: 'status', required: true }, 'count']],
                    [
                        'model_C',
                        ['id', { name: 'name', required: true }, { name: 'post_id', required: true }, 'author_id'],
                        ['post', { name: 'author', reference: 'model_A' }],
                    ],
                    ['model_D', ['id', { name: 'post_id', required: true }], ['post']],
                */];