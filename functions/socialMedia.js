const socials = [
  {
    name: 'GitHub',
    image: './images/github.png',
    link: 'https://github.com/TrevorGuo',
  },
  {
    name: 'LinkedIn',
    image: './images/linkedin.png',
    link: 'https://www.linkedin.com/in/trevor-guo-63387719a/',
  },
  {
    name: 'Instagram',
    image: './images/instagram.png',
    link: 'https://www.instagram.com/tree.guo/?hl=en',
  },
  {
    name: 'Discord',
    image: './images/discord.png',
    link: 'https://discord.com/users/127611267388014592',
  },
];

function setSocials() {
  socials.forEach((social) => createIcon(social));

  const tag = document.createElement('div');
  tag.innerHTML = 'Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect" target="_blank">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">www.flaticon.com</a>'
  document.getElementById('socialsContainer').appendChild(tag);
}

function createIcon(social) {
  const tag = document.createElement('a');
  const image = document.createElement('img');
  image.setAttribute('src', social.image);
  image.setAttribute('alt', 'My ' + social.name);
  tag.appendChild(image);
  tag.setAttribute('href', social.link);
  tag.setAttribute('target', '_blank');
  const element = document.getElementById('socials');
  element.appendChild(tag);
}
