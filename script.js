document.addEventListener('DOMContentLoaded', function () {
    // Swiperインスタンスの初期化
    const swiper = new Swiper('.mySwiper', {
        direction: 'vertical',
        mousewheel: true,
        keyboard: {
            enabled: true,
        },
        effect: 'slide',
        speed: 800,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        resistance: false,
        slidesPerView: 1,
        spaceBetween: 0,
        touchRatio: 1,
        touchAngle: 45,
        grabCursor: true,
    });

    // ナビゲーションリンクの更新
    const updateActiveLink = (index) => {
        document.querySelectorAll('.Links li').forEach((li, i) => {
            li.classList.toggle('activeLink', i === index);
        });
    };

    // スライド移動関数をグローバルに定義
    window.Navigate = (index) => {
        swiper.slideTo(index);
        updateActiveLink(index);
    };

    // スライド変更時のイベント処理
    swiper.on('slideChange', () => {
        updateActiveLink(swiper.activeIndex);

        // About Meスライドに入った時のスキルバーアニメーション
        if (swiper.activeIndex === 1) {
            document.querySelectorAll('.skill-bar .active-bar').forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                requestAnimationFrame(() => {
                    bar.style.width = width;
                });
            });
        }
    });

    // Contact Meボタンのクリック処理
    document.getElementById('contactButton').addEventListener('click', () => {
        swiper.slideTo(3); // Contact Meスライドへ移動
        updateActiveLink(3);
    });

    // 初期化時に正しいリンクを選択状態に
    updateActiveLink(swiper.activeIndex);

    // スワイプ処理の追加
    const services = document.querySelectorAll('.service');

    services.forEach(service => {
        let touchStartX = 0;
        let touchEndX = 0;

        service.addEventListener('touchstart', e => {
            touchStartX = e.touches[0].clientX;
        });

        service.addEventListener('touchmove', e => {
            touchEndX = e.touches[0].clientX;
        });

        service.addEventListener('touchend', () => {
            const swipeDistance = touchStartX - touchEndX;

            if (swipeDistance > 50) { // 右から左へのスワイプ
                service.classList.add('swiped');
            } else if (swipeDistance < -50) { // 左から右へのスワイプ
                service.classList.remove('swiped');
            }
        });
    });
});