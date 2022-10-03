import $ from 'jquery';
export default function Home() {
  return (
    <div className="cabinetWrapper">
      <div className="">
        <div className="cabinet_nav">
          <a href="#" className="cabinet_logo">
            <img src="img/landing_logo.png" alt="logo" className="cabinet_logoImg" />
            <div className="cabinet_logoText">
              fair
              <span className="cabinet_logoTextSm">token</span>
            </div>
          </a>
          <div className="cabinet_navBtnHolder">
            <button className="cabinet_connect">Connect Wallet</button>
            <button className="cabinet_Close">x</button>
          </div>
        </div>
        <div className="cabinet_marketHolder">
          <div className="cabinet_textMd cabinet_textLight">1 FTN = 12 USD</div>
          <button className="cabinet_buy">Buy Token</button>
          <button className="cabinet_sell">Sell Token</button>
        </div>
        <div className="cabinet_topLine">
          <div className="cabinet_itemBordered">
            <div className="cabinet_itemBordered_side cabinet_textSecondary">BNB Balance</div>
            <div className="cabinet_itemBordered_side cabinet_textLg">
              12344<span className="cabinet_lableG">BNB</span>
            </div>
            <div className="cabinet_itemBordered_side cabinet_textSecondary">BNB Earned</div>
            <div className="cabinet_itemBordered_side cabinet_textLg">
              12344<span className="cabinet_lableG">BNB</span>
            </div>
          </div>
          <div className="cabinet_itemBordered">
            <div className="cabinet_itemBordered_side cabinet_textSecondary">FTN Balance</div>
            <div className="cabinet_itemBordered_side cabinet_textLg">
              12344<span className="cabinet_lableG">FTN</span>
            </div>
            <div className="cabinet_itemBordered_side cabinet_textSecondary">FTN Earned</div>
            <div className="cabinet_itemBordered_side cabinet_textLg">
              12344<span className="cabinet_lableG">FTN</span>
            </div>
          </div>
          <div className="cabinet_itemBordered">
            <div className="cabinet_itemBordered_side cabinet_textSecondary">
              Refferals First line
            </div>
            <div className="cabinet_itemBordered_side cabinet_textLg">123</div>
            <div className="cabinet_itemBordered_side cabinet_textSecondary">
              Holder recieve in Token / BNB
            </div>
            <div className="cabinet_itemBordered_side cabinet_textLg">
              123<span className="cabinet_lableG">FTN</span> / 1212
              <span className="cabinet_lableG">BNB</span>
            </div>
            <div className="cabinet_itemBordered_side cabinet_textSecondary">
              Total recive in Lottery
            </div>
            <div className="cabinet_itemBordered_side cabinet_textLg">
              123<span className="cabinet_lableG">FTN</span>
            </div>
          </div>
        </div>
        <div className="cabinet_botLine">
          <div className="cabinet_itemBordered">
            <div className="cabinet_itemBordered_side cabinet_textSecondary cabinet_tableBtnHolder">
              Total Locked: 10 000 BNB
              <button className="cabinet_buy">Unlock</button>
            </div>
            <table className="table cabinet_textLight">
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
          <div className="cabinet_itemBordered">
            <div className="cabinet_itemBordered_side cabinet_textSecondary cabinet_tableBtnHolder">
              Total Locked: 10 000 BNB
              <button className="cabinet_buy">Harvest</button>
            </div>
            <table className="table cabinet_textLight">
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
          <div className="cabinet_itemBordered">
            <div className="cabinet_itemBordered_side cabinet_textSecondary">
              Total Locked: 10 000 BNB
            </div>
            <table className="table cabinet_textLight">
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
