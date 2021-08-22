export const createHand = (hand) => {
  let html = "";
  hand.forEach((card) => {
    html += getNewCardHtml(card);
  });
  return html;
};

export function getNewCardHtml(card) {
  return `
    <div class='card'>
      <div class='card-row row-top'>
        <div class="card-text">
          <div>${card}</div>
        </div>
        <div class="card-text">
          <div>${card}</div>
        </div>
      </div>
      <div class='card-row row-bottom'>
        <div class="card-text">
          <div>${card}</div>
        </div>
        <div class="card-text">
          <div>${card}</div>
        </div>
      </div>
    </div>`;
}
