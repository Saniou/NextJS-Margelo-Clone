import React from "react";
import { TileWrapper, TileBackground, TileContent, Tile } from "./tile";
import { WorkBackground, WorkContainer, WorkLeft, WorkRight, WorkLink } from "./work";
import Image from "next/image";

const Works = () => {
    return (
        <div>
            <TileWrapper numOfPages={3}>
                <TileBackground>
                    <WorkBackground/>
                </TileBackground>
                <TileContent>
                    <Tile
                        page={0}
                        renderContent={({progress}) => {
                            return (
                                <WorkContainer>
                                    <WorkLeft progress={progress}>
                                        <div>We built</div>
                                        <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                            <WorkLink href="https://pinkpanda.io">Pink Panda</WorkLink>&apos;s app</div>
                                    </WorkLeft>
                                    <WorkRight progress={progress}>
                                        <Image src='/assets/Crypto.webp' width={840} height={1620} alt="sda"/>
                                    </WorkRight>
                                </WorkContainer>
                            )
                        }}></Tile>
                </TileContent>
                <TileContent>
                    <Tile
                        page={1}
                        renderContent={({progress}) => {
                            return (
                                <WorkContainer>
                                    <WorkLeft progress={progress}>
                                        <div>We Made</div>
                                        <div className="text-3xl md:text-5xl font-semibold tracking-tight">Steakwallet&nbsp;faster.</div>
                                    </WorkLeft>
                                    <WorkRight progress={progress}>
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-[90%] mt-20 rounded-[40px]">
                                            <source src="/assets/coinbase-wallet.mp4" type="video/mp4; hvc1"/>
                                        </video>
                                    </WorkRight>
                                </WorkContainer>
                            )
                        }}></Tile>
                </TileContent>
                <TileContent>
                    <Tile
                        page={2}
                        renderContent={({progress}) => {
                            return (
                                <WorkContainer>
                                    <WorkLeft progress={progress}>
                                        <div>We helped</div>
                                        <div className="text-4xl md:text-5xl font-semibold tracking-tight">Showtime ship faster.</div>
                                    </WorkLeft>
                                    <WorkRight progress={progress}>
                                        <Image src='/assets/nft.webp' width={840} height={1620} alt='Showtime ship faster'/>
                                    </WorkRight>
                                </WorkContainer>
                            )
                        }}></Tile>
                </TileContent>
            </TileWrapper>
        </div>
    );
}

export default Works;