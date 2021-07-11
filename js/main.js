'use strict';

{
    // メニューの設定
    const open = document.getElementById('open');
    const overlay = document.querySelector('.overlay');
    const close = document.getElementById('close');
  
    open.addEventListener('click', () => {
      overlay.classList.add('show');
      open.classList.add('hide');
    });
  
    close.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('hide');
    });

    // タブの設定
    const menuItems = document.querySelectorAll('.menu li a');
    const contents = document.querySelectorAll('.content');

    menuItems.forEach(clickedItem => {
        clickedItem.addEventListener('click', e => {
            e.preventDefault();

            menuItems.forEach(item => {
                item.classList.remove('active');
            });
            clickedItem.classList.add('active');

            contents.forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(clickedItem.dataset.id).classList.add('active');
        });
    });

    // 画像の出現方法
    const targets = document.querySelectorAll('.gazo img');

    function callback(entries, obs) {
        console.log(entries[0]);

        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
    
            entry.target.classList.add('appear');
            obs.unobserve(entry.target);
        });
    }
    
    const options = {
        threshold: 0.2,
    };

    const observer = new IntersectionObserver(callback, options);

    targets.forEach(target => {
        observer.observe(target);
    });
}