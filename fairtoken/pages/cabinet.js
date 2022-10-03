import $ from 'jquery';
export default function Home() {
  return (
    <div class="cabinetWrapper">
      <div class="">
        <div class="cabinet_nav">
          <a href="#" class="cabinet_logo">
            <img src="img/landing_logo.png" alt="logo" class="cabinet_logoImg" />
            <div class="cabinet_logoText">
              fair
              <span class="cabinet_logoTextSm">token</span>
            </div>
          </a>
          <div class="cabinet_navBtnHolder">
            <button class="cabinet_connect">Connect Wallet</button>
            <button class="cabinet_Close">x</button>
          </div>
        </div>
        <div class="cabinet_marketHolder">
          <div class="cabinet_textMd cabinet_textLight">1 FTN = 12 USD</div>
          <button class="cabinet_buy">Buy Token</button>
          <button class="cabinet_sell">Sell Token</button>
        </div>
        <div class="cabinet_topLine">
          <div class="cabinet_itemBordered">
            <div class="cabinet_itemBordered_side cabinet_textSecondary">BNB Balance</div>
            <div class="cabinet_itemBordered_side cabinet_textLg">
              12344<span class="cabinet_lableG">BNB</span>
            </div>
            <div class="cabinet_itemBordered_side cabinet_textSecondary">BNB Earned</div>
            <div class="cabinet_itemBordered_side cabinet_textLg">
              12344<span class="cabinet_lableG">BNB</span>
            </div>
          </div>
          <div class="cabinet_itemBordered">
            <div class="cabinet_itemBordered_side cabinet_textSecondary">FTN Balance</div>
            <div class="cabinet_itemBordered_side cabinet_textLg">
              12344<span class="cabinet_lableG">FTN</span>
            </div>
            <div class="cabinet_itemBordered_side cabinet_textSecondary">FTN Earned</div>
            <div class="cabinet_itemBordered_side cabinet_textLg">
              12344<span class="cabinet_lableG">FTN</span>
            </div>
          </div>
          <div class="cabinet_itemBordered">
            <div class="cabinet_itemBordered_side cabinet_textSecondary">Refferals First line</div>
            <div class="cabinet_itemBordered_side cabinet_textLg">123</div>
            <div class="cabinet_itemBordered_side cabinet_textSecondary">
              Holder recieve in Token / BNB
            </div>
            <div class="cabinet_itemBordered_side cabinet_textLg">
              123<span class="cabinet_lableG">FTN</span> / 1212
              <span class="cabinet_lableG">BNB</span>
            </div>
            <div class="cabinet_itemBordered_side cabinet_textSecondary">
              Total recive in Lottery
            </div>
            <div class="cabinet_itemBordered_side cabinet_textLg">
              123<span class="cabinet_lableG">FTN</span>
            </div>
          </div>
        </div>
        <div class="cabinet_botLine">
          <div class="cabinet_itemBordered">
            <div class="cabinet_itemBordered_side cabinet_textSecondary cabinet_tableBtnHolder">
              Total Locked: 10 000 BNB
              <button class="cabinet_buy">Unlock</button>
            </div>
            <table class="table cabinet_textLight">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                  <th scope="col">Handle2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="cabinet_itemBordered">
            <div class="cabinet_itemBordered_side cabinet_textSecondary cabinet_tableBtnHolder">
              Total Locked: 10 000 BNB
              <button class="cabinet_buy">Harvest</button>

            </div>
            <table class="table cabinet_textLight">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                  <th scope="col">Handle2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="cabinet_itemBordered">
            <div class="cabinet_itemBordered_side cabinet_textSecondary">
              Total Locked: 10 000 BNB
            </div>
            <table class="table cabinet_textLight">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                  <th scope="col">Handle2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
