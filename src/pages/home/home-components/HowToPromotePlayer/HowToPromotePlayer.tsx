// @ts-ignore
import Steps from "../../../../constants/steps-to-promote-player.ts";
// @ts-ignore
import Space from "../../../../components/Space/index.tsx";
import "./styles.scss";

const HowToPromotePlayer = (): JSX.Element => {
    return (
        <div id="player-focus-container" className="py-10">
            <Space>
                <div className="flex-layout mt-24">
                    <div className="equal-sides">
                        {Steps.map((data:any, index:any) => {
                            return (
                                <div key={index}>
                                    <div className="flex">
                                        <div>
                                            <p className="plus-jakarta blue-text-color numbering">0{index + 1}</p>
                                        </div>
                                        <div id="space-in-between">
                                            <p className="plus-jakarta steps">{data}</p>
                                        </div>
                                    </div>
                                    <div className={index + 1 === Steps.length ? 'hidden' : ''}>
                                        <div className="dashed-line ml-7"></div>
                                    </div>
                                    {/*End*/}
                                </div>
                            )
                        })}
                    </div>
                    <div className="equal-sides">
                        <div id="side-2-space">
                            <p id="how-to" className="plus-jakarta text-4xl font-bold red-text-color">How to</p>
                            <p id="promote-a-player" className="spantaran blue-text-color mt-7">
                                Promote a Player
                            </p>
                        </div>
                    </div>
                </div>
            </Space>
        </div>
    )
};

export default HowToPromotePlayer;
