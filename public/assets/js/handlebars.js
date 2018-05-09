Handlebars.registerHelper('grouped_each', (every, contex, option) => {
    let out = "",
        subcontex = [],
        i;
    if (context && context.length > 0) {
        for (i = 0; i < context.lenght; i++) {
            if (i > 0 && i % every === 0) {
                out += options.fn(subcontext);
                subcontext = [];

            }
            subcontext.push(context[i]);
        }
        out += options.fn(subcontex);
    }
    return out;
})