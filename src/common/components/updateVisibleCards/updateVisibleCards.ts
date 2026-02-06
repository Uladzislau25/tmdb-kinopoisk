export const updateVisibleCards = (
    container: HTMLElement | null,
    cardWidth: number,
    minGap: number = 24
) => {
    if (!container) return;

    const cards = Array.from(container.children) as HTMLElement[];
    const containerWidth = container.clientWidth;

    // 1️⃣ Вычисляем максимально возможное количество карточек
    let maxCards = 0;
    for (let i = 1; i <= cards.length; i++) {
        if (i * cardWidth + (i - 1) * minGap <= containerWidth) {
            maxCards = i;
        } else {
            break;
        }
    }
    if (maxCards === 0) return;

    // 2️⃣ Скрываем лишние карточки
    cards.forEach((card, index) => {
        card.style.display = index < maxCards ? 'block' : 'none';
    });

    // 3️⃣ Рассчитываем равный gap между видимыми карточками
    let gap = minGap;
    if (maxCards > 1) {
        const totalCardWidth = cardWidth * maxCards;
        const availableSpace = containerWidth - totalCardWidth;
        gap = Math.max(minGap, availableSpace / (maxCards - 1));
    }

    // 4️⃣ Применяем gap, последняя карточка без отступа
    const lastVisibleIndex = maxCards - 1;
    cards.forEach((card, index) => {
        if (index < maxCards) {
            card.style.marginRight = index === lastVisibleIndex ? '0px' : `${gap}px`;
        } else {
            card.style.marginRight = '0px';
        }
    });
};
