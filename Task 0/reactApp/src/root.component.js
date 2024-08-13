import styled from "styled-components";

const Wrapper = styled.section`
  div.hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 80px;

    /* @media only screen and (max-width: $screen-md) {
      flex-direction: column;
    } */

    & > div:first-child {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
    }

    .hero__img-container {
      width: 440px;
      height: 640px;

      & > img {
        position: absolute;
        width: 440px;
        height: 640px;
      }

      .hero__cards-container > div {
        position: absolute;

        .card {
          position: relative;
          z-index: 2;
        }

        // positioning cards
        &:nth-child(1) .card {
          top: 71px;
          left: -59px;
        }

        &:nth-child(2) .card {
          top: 71px;
          left: 316px;
        }

        &:nth-child(3) .card {
          top: 307px;
          left: -75px;
        }

        &:nth-child(4) .card {
          top: 482px;
          left: -110px;
        }

        &:nth-child(5) .card {
          top: 464px;
          left: 316px;
        }
      }
    }
  }

  section:has(> div.hero__background) {
    display: flex;
    justify-content: center;
    width: 100%;

    & > div.container {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 80vw;
    }
  }

  .hero__background {
    width: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -1;

    img {
      width: 100%;
    }
  }
`;

export default function Root(props) {
  console.log("reactApp mounted:", props.name);

  return (
    <Wrapper>
      <div class="container">
        <div class="hero">
          <div class="section-heading">
            <p>
              relax travel
              <span class="icon">
                <span class="icon-squiggly-arrow"></span>
              </span>
            </p>
            <h1>visa immigration for a Brighter you future</h1>
            <button class="button button--transparent">
              contact us
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          {/* HERO IMAGE */}
          <div class="hero__img-container">
            <img
              src="@link/homepage/assets/images/Rectangle 5681.png"
              alt="Traveling Girl"
              title="Traveling Girl"
            />

            {/* COUNTRY CARDS */}
            <div class="hero__cards-container">
              <div>
                <div class="card card--xs card--white">
                  <div>
                    <img
                      src="./assets/images/Germany.png"
                      alt="Germany"
                      title="Germany"
                    />
                  </div>
                  <p>Germany</p>
                </div>
              </div>

              <div>
                <div class="card card--xs card--white">
                  <div>
                    <img
                      src="./assets/images/South Korea.png"
                      alt="South Korea"
                      title="South Korea"
                    />
                  </div>
                  <p>South Korea</p>
                </div>
              </div>

              <div>
                <div class="card card--xs card--white">
                  <div>
                    <img
                      src="./assets/images/South Africa.png"
                      alt="South Africa"
                      title="South Africa"
                    />
                  </div>
                  <p>South Africa</p>
                </div>
              </div>

              <div>
                <div class="card card--xs card--white">
                  <div>
                    <img
                      src="./assets/images/Turkey.png"
                      alt="Turkey"
                      title="Turkey"
                    />
                  </div>
                  <p>Turkey</p>
                </div>
              </div>

              <div>
                <div class="card card--xs card--white">
                  <div>
                    <img
                      src="./assets/images/Indonesia.png"
                      alt="Indonesia"
                      title="Indonesia"
                    />
                  </div>
                  <p>Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
