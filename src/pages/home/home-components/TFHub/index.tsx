// @ts-ignore
import Space from "../../../../components/Space/index.tsx";
// @ts-ignore
import Profiling from "./icons/Profiling.tsx";
// @ts-ignore
import Click from "./icons/Click.tsx";
// @ts-ignore
import Coaches from "./icons/Coaches.tsx";
// @ts-ignore
import Access from "./icons/Access.tsx";
// @ts-ignore
import Network from "./icons/Network.tsx";
// @ts-ignore
import Laws from "./icons/Laws.tsx";

import "./styles.scss";

const TFHub = (): JSX.Element => {
    return (
        <div>
            <Space>
                <div>
                    <div className="flex justify-center">
                        <p id="TFHub" className="spantaran mt-48">
                            Why you need<br />
                            Transferhub
                        </p>
                    </div>
                    <div className="flex justify-center mt-20">
                        <div className="flex w-3/12 ml-10">
                            <button className="func-btn py-3 px-5 func-btn-active">As a Footballer</button>
                            <div className="px-2"></div>
                            <button className="func-btn py-3 px-5">As a Coach</button>
                        </div>
                    </div>
                    <div className="flex mt-10">
                        <div className="equal-sides">
                            <div className="sample-card flex justify-center">
                                <div>
                                    <img id="kick" className="mt-16" src={require("../../../../static/images/kick.png")} alt="As a footballer" />
                                    <div>
                                        <p className="sample-card-text text-center mt-5">
                                            As a Footballer
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="sample-card flex justify-center mt-10">
                                <div>
                                    <img id="coach" className="mt-16" src={require("../../../../static/images/coach.png")} alt="As a coach" />
                                    <div>
                                        <p className="sample-card-text text-center mt-5">
                                            As a Coach
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="equal-sides">
                            <div id="blue-border">
                                <div className="px-8 py-10">

                                    <div className="flex">
                                        <div>
                                            <Profiling />
                                        </div>
                                        <div>
                                            <p className="plus-jakarta tfhub-text px-8 pt-4">For proper profiling and record keeping </p>
                                        </div>
                                    </div>

                                    <div className="flex mt-10">
                                        <div>
                                            <Click />
                                        </div>
                                        <div>
                                            <p className="plus-jakarta tfhub-text px-8 pt-4">To have all your footballing data in one click </p>
                                        </div>
                                    </div>

                                    <div className="flex mt-10">
                                        <div>
                                            <Coaches />
                                        </div>
                                        <div>
                                            <p className="plus-jakarta tfhub-text px-8">Easily accessible and verifiable to coaches, scouts and football club</p>
                                        </div>
                                    </div>

                                    <div className="flex mt-10 pt-4">
                                        <div>
                                            <Access />
                                        </div>
                                        <div>
                                            <p className="plus-jakarta tfhub-text px-8">To track and monitor personal progress with data</p>
                                        </div>
                                    </div>

                                    <div className="flex mt-10 pt-4">
                                        <div>
                                            <Network />
                                        </div>
                                        <div>
                                            <p className="plus-jakarta tfhub-text px-8"> To get connected to the next club in your career</p>
                                        </div>
                                    </div>

                                    <div className="flex mt-10 pt-4">
                                        <div>
                                            <Laws />
                                        </div>
                                        <div>
                                            <p className="plus-jakarta tfhub-text px-8"> To get agents, lawyers/scouts to represent you in the long run.</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Space>
        </div>
    )
};

export default TFHub;
