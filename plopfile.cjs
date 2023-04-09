module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please provide component name:',
      },
      {
        type: 'list',
        name: 'type',
        choices: ['core', 'layouts', 'modules', 'primitives'],
        message: 'Please provide the component type:',
      },
      {
        type: 'confirm',
        name: 'smart',
        message: '',
        default: false,
      },
    ],
    actions: (data) => {
      if (data.smart) {
        return [
          {
            type: 'add',
            path: 'src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.props.ts',
            templateFile: 'plop-templates/component/props.hbs',
          },
          {
            type: 'add',
            path: 'src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
            templateFile: 'plop-templates/component/view.hbs',
          },
          {
            type: 'add',
            path: 'src/components/{{type}}/{{pascalCase name}}/index.ts',
            templateFile: 'plop-templates/component/index.hbs',
          },
          {
            type: 'add',
            path: 'src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.container.tsx',
            templateFile: 'plop-templates/component/container.hbs',
          },
        ];
      }
      return [
        {
          type: 'add',
          path: 'src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.props.ts',
          templateFile: 'plop-templates/component/dumbProps.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
          templateFile: 'plop-templates/component/dumbView.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{type}}/{{pascalCase name}}/index.ts',
          templateFile: 'plop-templates/component/dumbIndex.hbs',
        },
      ];
    },
  });

  plop.setGenerator('route', {
    description: 'create a route',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please provide route name:',
      },
      {
        type: 'list',
        name: 'root',
        choices: ['auth', 'main'],
        message: 'Please provide the root route:',
      },
      {
        type: 'input',
        name: 'path',
        message: 'Please enter the path',
      },
    ],
    actions: (data) => {
      const paramsRaw = (data.path || '').match(/:\w+/gi);
      const params = paramsRaw ? paramsRaw.map((w) => w.split(':')[1]) : null;
      return [
        {
          type: 'add',
          path: 'src/routes/{{root}}/{{pascalCase name}}/{{pascalCase name}}.container.tsx',
          templateFile: 'plop-templates/route/container.hbs',
        },
        {
          type: 'add',
          path: 'src/routes/{{root}}/{{pascalCase name}}/{{pascalCase name}}.props.ts',
          templateFile: 'plop-templates/route/props.hbs',
          data: {
            params: params
              ? `{\n  ${params.map((w) => `${w}: string;`).join('\n  ')}\n}`
              : `{}`,
          },
        },
        {
          type: 'add',
          path: 'src/routes/{{root}}/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
          templateFile: 'plop-templates/route/view.hbs',
        },
        {
          type: 'add',
          path: 'src/routes/{{root}}/{{pascalCase name}}/index.ts',
          templateFile: 'plop-templates/route/index.hbs',
        },
      ];
    },
  });
};
