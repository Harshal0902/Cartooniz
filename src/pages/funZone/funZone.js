import React from 'react'
import SpiderMan from "../../assets/models/SpiderMan"
import Pikachu from "../../assets/models/Pikachu"
import Sonic from "../../assets/models/Sonic"
import PatrickStar from "../../assets/models/PatrickStar"
import MickyMouse from "../../assets/models/MickyMouse"
import "./funZOne.css"

export default function Models() {
    return (
        <div className="model__body">

            {/* Model 1 */}
            <div className="models">
                <div className="model">
                    <iframe src="https://go.echoar.xyz/msUC" title="Earth" className="iframe" />
                </div>

                <div className="model__info">
                    <div className="model__title">Spider Man</div>
                    <div className="model__details">
                        Spider-Man is a superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy #15 (Aug. 1962) in the Silver Age of Comic Books. He appears in American comic books published by Marvel Comics, as well as in a number of movies, television shows, and video game adaptations set in the Marvel Universe. In the stories, Spider-Man is the alias of Peter Parker, an orphan raised by his Aunt May and Uncle Ben in New York City after his parents Richard and Mary Parker died in a plane crash. Lee and Ditko had the character deal with the struggles of adolescence and financial issues, and accompanied him with many supporting characters, such as J. Jonah Jameson, Harry Osborn, Max Modell, romantic interests Gwen Stacy and Mary Jane Watson, and foes such as Doctor Octopus, the Green Goblin and Venom.
                    </div>
                    <div className="view">
                        <img className="QRCode" src={SpiderMan} alt="Spider Man QR" />
                        <a href="https://go.echoar.xyz/msUC" style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                            <div className="btn" style={{ color: "white", paddingTop: ".7rem" }}>View in AR
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Model 2 */}
            <div className="models">
                <div className="model">
                    <iframe src="https://go.echoar.xyz/D7GB" title="Pikachu" className="iframe" />
                </div>

                <div className="model__info">
                    <div className="model__title">Pikachu</div>
                    <div className="model__details">
                        Pikachu is a species of Pokémon, fictional creatures that appear in an assortment of media of the Pokémon franchise by The Pokémon Company. Pikachu is a yellow mouse-like Pokémon with powerful electrical abilities. In most vocalized appearances, including the anime and certain video games, it is primarily voiced by Ikue Ōtani. A Pikachu also appears as part of the main cast in the live-action animated film Pokémon Detective Pikachu, played in CGI and voiced by Ryan Reynolds.
                    </div>
                    <div className="view">
                        <img className="QRCode" src={Pikachu} alt="Pikachu QR" />
                        <a href="https://go.echoar.xyz/D7GB" style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                            <div className="btn" style={{ color: "white", paddingTop: ".7rem" }}>View in AR
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Model 3 */}
            <div className="models">
                <div className="model">
                    <iframe src="https://go.echoar.xyz/9fNM" title="Sonic" className="iframe" />
                </div>

                <div className="model__info">
                    <div className="model__title">Sonic</div>
                    <div className="model__details">
                        Sonic the Hedgehog is an American-Italian animated television series based on the video game series of the same name. It was story edited by Len Janson and produced by DIC Productions, L.P., Sega of America, Inc., and the Italian studio Reteitalia S.p.A. in association with Telecinco. It is the second of DiC's Sonic cartoons, following Adventures of Sonic the Hedgehog. It features a more dramatic and dark story than the lighter Adventures series, depicting Sonic as a member of a band of freedom fighters battling to overthrow Doctor Robotnik, now a despotic dictator who conquered their home planet Mobius years prior, ruling it as a polluted industrial dystopia.
                    </div>
                    <div className="view">
                        <img className="QRCode" src={Sonic} alt="Sonic QR" />
                        <a href="https://go.echoar.xyz/9fNM" style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                            <div className="btn" style={{ color: "white", paddingTop: ".7rem" }}>View in AR
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Model 4 */}
            <div className="models">
                <div className="model">
                    <iframe src="https://go.echoar.xyz/wy1E" title="PatrickStar" className="iframe" />
                </div>

                <div className="model__info">
                    <div className="model__title">Patrick Star</div>
                    <div className="model__details">
                        Patrick Star is a fictional character in the American animated television series SpongeBob SquarePants. He is voiced by actor Bill Fagerbakke and was created and designed by marine biologist and animator Stephen Hillenburg. He first appeared in the series' pilot episode "Help Wanted" on May 1, 1999. In addition to his supporting role on SpongeBob SquarePants, Patrick also serves as the main protagonist of The Patrick Star Show.
                    </div>
                    <div className="view">
                        <img className="QRCode" src={PatrickStar} alt="PatrickStar QR" />
                        <a href="https://go.echoar.xyz/wy1E" style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                            <div className="btn" style={{ color: "white", paddingTop: ".7rem" }}>View in AR
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Model 5 */}
            <div className="models">
                <div className="model">
                    <iframe src="https://go.echoar.xyz/kYWc" title="MickyMouse" className="iframe" />
                </div>

                <div className="model__info">
                    <div className="model__title">Micky Mouse</div>
                    <div className="model__details">
                        Mickey Mouse is a cartoon character created in 1928 by The Walt Disney Company, who also serves as the brand's mascot. An anthropomorphic mouse who typically wears red shorts, large yellow shoes, and white gloves, Mickey is one of the world's most recognizable fictional characters.Ten of Mickey's cartoons were nominated for the Academy Award for Best Animated Short Film, one of which, Lend a Paw, won the award in 1942. In 1978, Mickey became the first cartoon character to have a star on the Hollywood Walk of Fame.
                    </div>
                    <div className="view">
                        <img className="QRCode" src={MickyMouse} alt="MickyMouse QR" />
                        <a href="https://go.echoar.xyz/kYWc" style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                            <div className="btn" style={{ color: "white", paddingTop: ".7rem" }}>View in AR
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}