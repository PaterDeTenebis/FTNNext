import $ from 'jquery';
import React, { useEffect, useRef } from 'react';

import Chart from 'chart.js/auto';
import Annotation from 'chartjs-plugin-annotation';
Chart.register(Annotation);
export default function Home() {
  const canvasEl = useRef(null);
  useEffect(() => {
    const ctx = canvasEl.current.getContext('2d');
    // const ctx = document.getElementById("myChart");
    const weight = [90, 10];
    const labels = ['90%', '10%'];
    const data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: ['#00c1c2', '#191919'],
          label: 'Tokenomics',
          data: weight,
          fill: true,
          borderWidth: 0,
          // borderColor: colors.purple.default,
          // lineTension: 0.2,
          // pointBackgroundColor: colors.purple.default,
          // pointRadius: 3
        },
      ],
    };
    const config = {
      type: 'pie',
      data: data,
      options: {
        plugins: {
          tooltip: {
            enabled: false
          },
          legend: {
            display: false,
            labels: {
              color: 'rgb(255, 99, 132)',
            },
          },
          autocolors: false,
          annotation: {
            annotations: {
              label1: {
                type: 'label',
                xValue: 2.5,
                yValue: 60,
                xAdjust: 100,
                yAdjust: 300,
                backgroundColor: 'rgba(245,245,245, 0)',
                content: ['90%'],
                font: {
                  size: 88,
                },
              },
              label2: {
                type: 'label',
                xValue: 2.5,
                yValue: 60,
                xAdjust: -120,
                yAdjust: -400,
                backgroundColor: 'rgba(245,245,245, 0)',
                content: ['10%'],
                color: 'rgba(245,245,245)',
                font: {
                  size: 88,
                },
              },
            },
          },
        },
      },
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  return (
    <div className="landing_main">
      <section className="landing_promo">
        <div className="container">
          <div className="landing_menu">
            <a href="#" className="landing_menuItem landing_textCommon">
              fairpaper
            </a>
            <a href="#landing_tokenomics" className="landing_menuItem landing_textCommon">
              tokenomics
            </a>
            <a href="#landing_lottery" className="landing_menuItem landing_textCommon">
              lottery
            </a>
            <a href="#landing_social" className="landing_menuItem landing_textCommon">
              social
            </a>
          </div>
          <div className="landing_promoMain">
            <div className="landing_sectionHeader">
              welcome to <br />
              fairtoken family
            </div>
            <div className="landing_textXl">worlds top-1 defi community</div>
            <div className="landing_promoMain_contract">
              <div className="d-flex">
                <img src="img/landing_logo.png" alt="logo" />
                <div className="d-block">
                  <span className="landing_textXXL">fair</span>
                  <br />
                  <span className="landing_textMd">token</span>
                </div>
              </div>
              <div className="landing_textCommon">Contract address: 0xjeoeodnbdksodohdh</div>
              <div className="landing_watch">
                <button className="landing_watchBtn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <div className="landing_textCommon">watch video</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="landing_tokenomics" id="landing_tokenomics">
        <div className="container">
          <div className="landing_sectionHeader">tokenomics</div>
          <div className="landing_tokenomicsMain">
            <div className="d-flex">
              <canvas id="myChart" className="landing_tokenomicsPie" ref={canvasEl} />
              {/* <img src="img/landing_tokenomics.png" alt="" className="landing_tokenomicsPie" /> */}
              <div className="landing_textCommon">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perspiciatis dicta optio
                error earum corporis ad eos, magnam dolore facere consectetur, sequi, quisquam sit
                quos maxime? Architecto sint quo quas deleniti recusandae velit rerum sed
                consequuntur optio autem nihil veniam quia iure, esse ea voluptatibus, adipisci
                veritatis, nostrum vitae. Deleniti?
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="landing_lottery" id="landing_lottery">
        <div className="container">
          <div className="landing_sectionHeader">lottery</div>
          <div className="landing_lotteryMain">
            <div className="landing_lotteryMain_item">
              <div className="landing_sectionHeader">12</div>
              <div className="landing_textMinor">hours</div>
            </div>
            <div className="landing_lotteryMain_item">
              <div className="landing_sectionHeader">12</div>
              <div className="landing_textMinor">minutes</div>
            </div>
            <div className="landing_lotteryMain_item">
              <div className="landing_sectionHeader">12</div>
              <div className="landing_textMinor">seconds</div>
            </div>
          </div>
        </div>
      </section>
      <div className="landing_bgWraper">
        <section className="landing_winners" id="landing_winners">
          <div className="container">
            <div className="landing_sectionHeader">winners</div>
            <div className="landing_winnersMain">
              <div className="landing_winnersMain_line">
                <div className="landing_winnersMain_lineItem">
                  <div className="landing_textCommon landing_textGreen">address</div>
                </div>
                <div className="landing_winnersMain_lineItem">
                  <div className="landing_textCommon landing_textGreen">transaction</div>
                </div>
                <div className="landing_winnersMain_lineItem">
                  <div className="landing_textCommon landing_textGreen">prize</div>
                </div>
              </div>
              <div className="landing_winnersMain_line">
                <div className="landing_winnersMain_lineItem">
                  <div className="landing_textCommon">0xjeoeodnb dksodohdh</div>
                </div>
                <div className="landing_winnersMain_lineItem">
                  <div className="landing_textCommon">18.09.2022</div>
                </div>
                <div className="landing_winnersMain_lineItem">
                  <div className="landing_textCommon">1000000 frt</div>
                </div>
              </div>
              <div className="landing_winnersMain_line">
                <div className="landing_winnersMain_lineItem">
                  <div className="landing_textCommon">0xjeoeodnb dksodohdh</div>
                </div>
                <div className="landing_winnersMain_lineItem">
                  <div className="landing_textCommon">18.09.2022</div>
                </div>
                <div className="landing_winnersMain_lineItem">
                  <div className="landing_textCommon">1000000 frt</div>
                </div>
              </div>
              <div className="landing_winnersMain_line">
                <div className="landing_winnersMain_lineItem">
                  <div className="landing_textCommon">0xjeoeodnb dksodohdh</div>
                </div>
                <div className="landing_winnersMain_lineItem">
                  <div className="landing_textCommon">18.09.2022</div>
                </div>
                <div className="landing_winnersMain_lineItem">
                  <div className="landing_textCommon">1000000 frt</div>
                </div>
              </div>
              <div className="landing_winnersMain_line">
                <div className="landing_winnersMain_lineItem">
                  <div className="landing_textCommon">0xjeoeodnb dksodohdh</div>
                </div>
                <div className="landing_winnersMain_lineItem">
                  <div className="landing_textCommon">18.09.2022</div>
                </div>
                <div className="landing_winnersMain_lineItem">
                  <div className="landing_textCommon">1000000 frt</div>
                </div>
              </div>
            </div>
            <div className="landing_winnersMore">
              <a
                href="#winners"
                className="landing_textCommon landing_textGreen"
                id="landing_winnersMore"
                onClick={(e) => {
                  e.preventDefault();
                  $('.landing_winnersMain').toggleClass('landing_hA');
                }}>
                watch history
              </a>
            </div>
          </div>
        </section>
        <section className="landing_social" id="landing_social">
          <div className="container">
            <div className="landing_sectionHeader">social media</div>
            <div className="landing_textXl">
              Subscribe to our official resources and stay tuned!
            </div>
            <div className="landing_socialMain">
              <button className="landing_watchBtn">
                <i className="fa-brands fa-telegram"></i>
              </button>
              <button className="landing_watchBtn">
                <i className="fa-brands fa-telegram"></i>
              </button>
              <button className="landing_watchBtn">
                <i className="fa-brands fa-discord"></i>
              </button>
              <button className="landing_watchBtn">
                <i className="fa-brands fa-twitter"></i>
              </button>
              <button className="landing_watchBtn">
                <i className="fa-brands fa-youtube"></i>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
