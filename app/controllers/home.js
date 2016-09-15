const home = async (ctx, next) => {
  console.log('request body');
  console.log(ctx.request.body);
  ctx.cookies.set('username', 'ecmadao');
  await ctx.render('home/indexx', {
    title: 'home page',
    content: 'this is home page'
  });
};

const about = async (ctx, next) => {
  const request = ctx.request;
  console.log('request query');
  console.log(request.query);
  console.log('ctx cookies');
  console.log(ctx.cookies.get('username'));
  await ctx.render('home/about', {
    title: 'about page',
    content: 'this is about page'
  });
};

export default {
  home,
  about
};
