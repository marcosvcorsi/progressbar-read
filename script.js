const bar = document.createElement('div');
const postWrap = document.querySelector('.post-wrap');

bar.style.height = '4px';
bar.style.width = '0';
bar.style.backgroundColor = '#6633cc';
bar.style.position = 'fixed';
bar.style.top = '0';
bar.style.left = '0';
bar.style.zIndex = '9999';
bar.style.transition = '0.2s';

document.body.append(bar);

const updateBar = () => {
  const textHeight = postWrap.offsetHeight;
  const pagePositionY = window.pageYOffset;

  const barValue = (pagePositionY * 100) / textHeight;

  bar.style.width = `${barValue}%`;
};

window.addEventListener('load', () => {
  document.addEventListener('scroll', updateBar);
});
