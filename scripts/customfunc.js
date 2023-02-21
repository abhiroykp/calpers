export function loadCustomPageStructure() {
    let currentSplitUrl = window.location.href.split('/');
    let ifHomePage = currentSplitUrl.at(-1)

    if (ifHomePage === 'plan-information') {
        $(".section").addClass("custom__plan-section");

        $('.custom__plan-section > .default-content-wrapper > *:not(:first-child)').wrapAll('<div class="bottom_plan-section"></div>');

        // accordion related logic
        let insertAccordion = `<div class="accordion">
            <div class="accordion__header">
                <h2>2023</h2>
                <span class="accordion__toggle"></span>
            </div>
            <div class="accordion__body">
                <ul>
                    <li><a href="https://assets.ctfassets.net/bekg5o92gbyp/2AxAY7pMAsJ0yZiq4Gvu6t/64fa79f7eb93432365a71c62b1e882b6/2023_Benefit_Summary_Basic_Final__1_.pdf"
                            target="_blank">2023 Benefit Summary (PDF)</a></li>
                    <li><a href="https://assets.ctfassets.net/bekg5o92gbyp/3sGgY3KESo5ELaHcdHVQEA/0c747352c303a2f24361f205a7a7ff0c/2023_CalPERS_Basic_Plan_EOC_Final_8.26.22_ADA.pdf"
                            target="_blank">2023 Evidence of Coverage (EOC) (PDF)</a></li>
                    <li><a href="https://assets.ctfassets.net/bekg5o92gbyp/7cpqhd9oeU8NO0NE1Uzr1Z/03ef0b6e53fc5feee837a78442142bf6/OE_HUB_-_2023_Basic_Plans___Benefits_-_Summary_of_Benefits__SBC__FINAL_ADA.pdf"
                            target="_blank">2023 Summary of Benefits and Coverage (SBC) (PDF)</a></li>
                </ul>
            </div>
            <div class="accordion__header">
                <h2>2022</h2>
                <span class="accordion__toggle"></span>
            </div>
            <div class="accordion__body">
                <ul>
                    <li><a href="https://assets.ctfassets.net/bekg5o92gbyp/1AImlSdQf2lZjdMnsXEUeF/f704f5248d40058cf79253bb3a634eb6/2022-State-of-CA-CalPERS-SBC_Drug-OOPM-updated.pdf"
                            target="_blank">2022 Summary of Benefits and Coverage (SBC) (PDF)</a></li>
                    <li><a href="https://assets.ctfassets.net/bekg5o92gbyp/50QxoKq9bgKwahSlcFq1vS/210249cd0fc9a9a472abf1e9afd40133/2022-Kaiser-Permanente-Basic-Plan-EOC_FINAL_8.11.21.pdf"
                            target="_blank">2022 Evidence of Coverage (EOC) (PDF)</a></li>
                    <li><a href="https://assets.ctfassets.net/bekg5o92gbyp/6oLZQInzB4129UrEVGylD2/51860383b79958ce8d566c7f5f3747e5/2022_CalPERS_Basic_Plan_EOC_Addendum_FINAL_12.16.21.pdf"
                            target="_blank">2022 Evidence of Coverage (EOC) Addendum (PDF)</a></li>
                    <li><a href="https://assets.ctfassets.net/bekg5o92gbyp/nP2lUH0oFrMr7bX3vW5mf/e1d34080d95bb480a77644f6927b16cb/CalPERS_2022_Basic_Benefit_Summary_Status_Quo.pdf"
                            target="_blank">2022 Benefit Summary (PDF)</a></li>
                </ul>
            </div>
            <div class="accordion__header">
                <h2>2021</h2>
                <span class="accordion__toggle"></span>
            </div>
            <div class="accordion__body">
                <ul>
                    <li><a href="https://assets.contentful.com/bekg5o92gbyp/1LJCUfq9Qj5XsMWz3etpfy/e8ae4b5351a43b182520e87e6382f463/2021-State-of-CA-CalPERS-SBC_ADA-Final.pdf"
                            target="_blank">2021 Summary of Benefits and Coverage (SBC) (PDF)</a></li>
                    <li><a href="https://assets.contentful.com/bekg5o92gbyp/6HR8GiuKksjesPSJhAk1nw/f70f3a1d08b1a896a946f8ca57330bac/2021-Kaiser-Permanente-Basic-Plan-EOC_FINAL_8.5.20.pdf"
                            target="_blank">2021 Evidence of Coverage (EOC) (PDF)</a></li>
                    <li><a href="https://assets.contentful.com/bekg5o92gbyp/1Exh6RoK7uw3Ald0XxOS0c/332a9c7740fee5fee446973e031c67ef/2021-CalPERS-EOC-Addendum_FINAL_9.9.20.pdf"
                            target="_blank">2021 Evidence of Coverage (EOC) Addendum (PDF)</a></li>
                    <li><a href="https://assets.ctfassets.net/bekg5o92gbyp/cT6qKLZzGwE7NvgauaG9E/60e0ace17af22a9163ee3a5d1ffa1149/Basic_Plans___Benefits_-_2021_Benefit_Summary__PDF_.pdf"
                            target="_blank">2021 Benefit Summary (PDF)</a></li>
                </ul>
            </div>
            <div class="accordion__header">
                <h2>Additional Materials</h2>
                <span class="accordion__toggle"></span>
            </div>
            <div class="accordion__body">
                <ul>
                    <li><a href="https://assets.ctfassets.net/bekg5o92gbyp/2SYLrAQR92g2Q7jB6wRfdd/a8d121efd24060d9536a38c67663ab62/2023_CalPERS_Chiro_Acu_Flier_ADA_FINAL.pdf"
                            target="_blank">Chiropractic & Acupuncture</a></li>
                    <li><a href="https://assets.ctfassets.net/bekg5o92gbyp/2az2iZ3fpy8glibbb2zdhZ/9262226fa96e77e93868df9ae7182637/737990402_afh-brochure_mer_ew_2021_brochure_r5_atv_aqs_ada.pdf"
                            target="_blank">Getting Care Away From Home (PDF)</a></li>
                    <li><a href="https://assets.ctfassets.net/bekg5o92gbyp/2CiTnOTHKtjDhVoXqrb0Lx/ece4a4f0e5bbf28801b82f041a6cd72e/2023_SBC_Glossary_FINAL_ADA.pdf"
                            target="_blank">Summary of Benefits and Coverage (SBC) Glossary (PDF)</a></li>
                </ul>
            </div>
        </div>`;

        $(insertAccordion).insertAfter("#california-basic-benefits--coverage");

        $('.accordion__header').click(function (e) {
            e.preventDefault();
            var currentIsActive = $(this).hasClass('is-active');
            $(this).parent('.accordion').find('> *').removeClass('is-active');
            if (currentIsActive != 1) {
                $(this).addClass('is-active');
                $(this).next('.accordion__body').addClass('is-active');
            }
        });

        // accordion related logic
        let insertDropdown = `<div class="button dropdown">
          <select aria-label="region" id="colorselector">
            <option value="">Select Region</option>
            <option value="Colorado_4">Colorado</option>
            <option value="Georgia_4">Georgia</option>
            <option value="Hawaii_4">Hawaii</option>
            <option value="Washington_4">Washington</option>
            <option value="Northwest_4">Northwest</option>
            <option value="Mid-Atlantic_4">Mid-Atlantic</option>
        
          </select>
        </div>
        
        <div class="output">
          <div id="Colorado_4" class="colors">
            <h2 class="h1">Colorado</h2>
            <h3 class="h2">2022 Benefits &amp; Coverage</h3>
            <ul>
              <li>
                <p><a
                    href="//downloads.ctfassets.net/bekg5o92gbyp/4q8TnbwkPGfDUhi29KHJrk/c73e94ed60ce051a3a7ba3c908b36e62/Colorado_2022_EOC_CALPERS_Basic__1_.pdf"
                    target="_blank">Evidence of Coverage (PDF)</a></p>
              </li>
              <li>
                <p><a
                    href="//downloads.ctfassets.net/bekg5o92gbyp/29UYS2DtvjIloPjfSoCX4J/0b9c854533a16a828126eedf67e4f70f/Colorado_2022_EOC_CALPERS_KPSA.pdf"
                    target="_blank">Evidence of Coverage – Medicare (PDF)</a></p>
              </li>
            </ul>
            <h3 class="h2">2021 Medicare Benefits &amp; Coverage</h3>
            <ul>
              <li>
                <p><a
                    href="https://assets.ctfassets.net/bekg5o92gbyp/3u3PszFAE6qCtbay3rtbXK/e1911612ef2447f5695f324f365fb44f/2020_Colorado_CalPERS_EOC_HMO.pdf"
                    title="Evidence of Coverage - Early Retirees" target="_blank">Evidence of Coverage – Early Retirees
                    (PDF)</a></p>
              </li>
              <li>
                <p><a
                    href="https://assets.ctfassets.net/bekg5o92gbyp/dXqYKpL34rEm9Ce9M7mtW/f9d8f7f0a124a4a6869cc5a9585d47a1/2020_Colorado_CalPERS_EOC_KPSA.pdf"
                    title="Evidence of Coverage – Medicare" target="_blank">Evidence of Coverage – Medicare (PDF)</a></p>
              </li>
              <li>
                <p><a
                    href="//assets.contentful.com/bekg5o92gbyp/3GEoceHlzqqPdjDdXdusUJ/7bcf96bb408fcf9426f4d568bdc73bf7/2021_Calpers_EOC_-Sr._Adv.pdf"
                    target="_blank">2021 Colorado KPSA EOC</a></p>
              </li>
            </ul>
          </div>
          <div id="Georgia_4" class="colors">
            <h2 class="h1">Georgia</h2>
            <h3 class="h2">2022 Benefits &amp; Coverage</h3>
            <ul>
              <li>
                <p><a
                    href="//assets.ctfassets.net/bekg5o92gbyp/2HWyOkeTGptLM7rHTSmCxJ/c0fde6d77dc4f37aea4cad13954c4680/Georgia_2022_EOC_CALPERS_Basic.pdf"
                    target="_blank">Evidence of Coverage (PDF)</a></p>
              </li>
              <li>
                <p><a
                    href="//assets.ctfassets.net/bekg5o92gbyp/6d2s8dWsRJWIawZaBxpPzH/d0f343b01df3e94f35c002a1e52792a3/Georgia_2022_EOC_CALPERS_KPSA.pdf"
                    target="_blank">Evidence of Coverage – Medicare (PDF)</a></p>
              </li>
            </ul>
            <h3 class="h2">2021 Medicare Benefits &amp; Coverage</h3>
            <ul>
              <li><a
                  href="//assets.contentful.com/bekg5o92gbyp/3srnJRPDFw8u2Y3YZGSmsA/460e301f440532cc85731c1582bedddb/Georgia-2021-EOC-CALPERS-Basic.pdf"
                  target="_blank">Evidence of Coverage – Early Retirees (PDF)</a></li>
              <li><a
                  href="//assets.contentful.com/bekg5o92gbyp/oKiFo4zpJGlI2xW7w5EgM/590556a88ba5475342add5614ae55748/Georgia-2021-EOC-CALPERS-KPSA.pdf"
                  target="_blank">Evidence of Coverage – Medicare (PDF)</a></li>
            </ul>
          </div>
          <div id="Hawaii_4" class="colors">
            <h2 class="h1">Hawaii</h2>
            <h3 class="h2">2022 Benefits &amp; Coverage</h3>
            <ul>
              <li>
                <p><a
                    href="//assets.ctfassets.net/bekg5o92gbyp/2VCtQ5NF4hUru3wkyAylXB/bcc394ec12b702ce640a03a3699acdba/Hawaii_2022_EOC_CALPERS_Basic.pdf"
                    target="_blank">Evidence of Coverage (PDF)</a></p>
              </li>
              <li>
                <p><a
                    href="//assets.ctfassets.net/bekg5o92gbyp/4dufHbSzdCcNLfKqGbO9nL/776a3d3a724fa3555d34f3d75d1a784e/Hawaii_2022_EOC_CALPERS_KPSA.pdf"
                    target="_blank">Evidence of Coverage – Medicare (PDF)</a></p>
              </li>
            </ul>
            <h3 class="h2">2021 Medicare Benefits &amp; Coverage</h3>
            <ul>
              <li><a
                  href="//assets.contentful.com/bekg5o92gbyp/2Zc7lh2FhzjxNo2D67IuQ4/58ace8a8b13cb29dcb370996f8c20a16/Hawaii-2021-EOC-CALPERS-Basic.pdf"
                  target="blank">Evidence of Coverage – Early Retirees (PDF)</a></li>
              <li><a
                  href="//assets.contentful.com/bekg5o92gbyp/4BWbtcpo6YFnTqKKDBhnCp/5d7b07069d754d44420d785fbaea9e9b/Hawaii-2021-EOC-CALPERS-KPSA.pdf"
                  target="blank">Evidence of Coverage – Medicare (PDF)</a></li>
            </ul>
          </div>
          <div id="Washington_4" class="colors">
            <h2 class="h1">Washington</h2>
            <h3 class="h2">2022 Benefits &amp; Coverage</h3>
            <ul>
              <li>
                <p><a
                    href="//assets.ctfassets.net/bekg5o92gbyp/2CcEplWQ5BVDkI2vNRh46X/c6c98a260b89f4866be9343a06ea3cbe/Washington_2022_EOC_CALPERS_Basic.pdf"
                    target="_blank">Evidence of Coverage (PDF)</a></p>
              </li>
              <li>
                <p><a
                    href="//assets.ctfassets.net/bekg5o92gbyp/4DKryO4nPmWLyZyJuFHDuM/50cc16101d105c4f36f1e832a316e1af/Washington_2022_EOC_CALPERS_KPSA.pdf"
                    target="_blank">Evidence of Coverage – Medicare (PDF)</a></p>
              </li>
            </ul>
            <h3 class="h2">2021 Medicare Benefits &amp; Coverage</h3>
            <ul>
              <li><a
                  href="//assets.contentful.com/bekg5o92gbyp/6wR6rOZAqgbCPSQyxhTTKl/c8429997b2e240da8f3bec1b90632bd4/Washington-2021-EOC-CALPERS-Basic.pdf"
                  target="_blank">Evidence of Coverage – Early Retirees (PDF)</a></li>
              <li><a
                  href="//assets.contentful.com/bekg5o92gbyp/064vUJp3wB5pbpwOZfIBh/1b9a0b4fcbeb347618b5d3e8a3a6304c/Washington-2021-EOC-CALPERS-KPSA.pdf"
                  target="_blank">Evidence of Coverage – Medicare (PDF)</a></li>
            </ul>
          </div>
          <div id="Northwest_4" class="colors">
            <h2 class="h1">Northwest</h2>
            <h3 class="h2">2022 Benefits &amp; Coverage</h3>
            <ul>
              <li>
                <p><a
                    href="//downloads.ctfassets.net/bekg5o92gbyp/WW2tbYfB7xaiarHqbapuh/229d6edb51e926489562b4b3a7e81491/Northwest_2022_EOC_CALPERS_Basic.pdf"
                    target="_blank">Evidence of Coverage (PDF)</a></p>
              </li>
              <li>
                <p><a
                    href="//downloads.ctfassets.net/bekg5o92gbyp/2vvQbirnbWcMppj4uRl1a2/c59c52c5bf0efa90de19bcb1432e0bcb/Northwest_2022_EOC_CALPERS_KPSA__1_.pdf"
                    target="_blank">Evidence of Coverage – Medicare (PDF)</a></p>
              </li>
            </ul>
            <h3 class="h2">2021 Medicare Benefits &amp; Coverage</h3>
            <ul>
              <li><a
                  href="//assets.contentful.com/bekg5o92gbyp/7yeidtoHbghXGIRIHlf6t4/01950fc9e6e909f031bf29db60bb04fe/Northwest-2021-EOC-CALPERS-Basic.pdf"
                  target="_blank">Evidence of Coverage – Early Retirees (PDF)</a></li>
              <li><a
                  href="//assets.contentful.com/bekg5o92gbyp/01M6DYf6uSOJZ8zr2i34Qf/5a276f9a1b94e05d9fb290fe3a2f7346/Northwest-2021-EOC-CALPERS-KPSA.pdf"
                  target="_blank">Evidence of Coverage – Medicare (PDF)</a></li>
            </ul>
          </div>
          <div id="Mid-Atlantic_4" class="colors">
            <h2 class="h1">Mid-Atlantic</h2>
            <h3 class="h2">2022 Benefits &amp; Coverage</h3>
            <ul>
              <li><a
                  href="https://assets.ctfassets.net/bekg5o92gbyp/76URGrmgCFXU89PB7uQvrs/be93783193671dcb3c915d27e10ee755/Mid_Atlantic_2022_EOC_CALPERS_Basic.pdf"
                  target="_blank">Evidence of Coverage (PDF)</a></li>
              <li><a
                  href="https://assets.ctfassets.net/bekg5o92gbyp/2c2jg56MaGuzX4gtw3B0cF/0ab0bbbf7b702fbd50041f11af8ad3d7/Mid_Atlantic_2022_EOC_CALPERS_KPSA.pdf"
                  target="_blank">Evidence of Coverage – Medicare (PDF)</a></li>
            </ul>
            <h3 class="h2">2021 Medicare Benefits &amp; Coverage</h3>
            <ul>
              <li><a
                  href="//assets.contentful.com/bekg5o92gbyp/3ee0IJJX2tkyx3k2uQbbq2/d8d817675a14e8a34c65c6d268b30951/MidAtlantic-2021-EOC-CALPERS-Basic__edited_.pdf"
                  target="blank">Evidence of Coverage – Early Retirees (PDF)</a></li>
              <li><a
                  href="//assets.contentful.com/bekg5o92gbyp/eNpvPJRQ6INXSYDNweXRN/369d85358502c9361c11ea983e1b66fd/MidAtlantic-2021-EOC-CALPERS-KPSA__edited_.pdf"
                  target="blank">Evidence of Coverage – Medicare (PDF)</a></li>
            </ul>
          </div>
        </div>`;

        $(insertDropdown).insertAfter(".custom__plan-section>.default-content-wrapper>.bottom_plan-section>p:last-of-type");

        $(function () {
            $('#colorselector').change(function () {
                if ($(this).val() === "") return;
                $('.colors').hide();
                console.log("hello", $('#' + $(this).val()));
                $('#' + $(this).val()).show();
            });
        });
    }
}