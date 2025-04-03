"use client"

import * as React from "react" // Import React
import { Home, FileText, CreditCard, Info } from "lucide-react"
import { AnimeNavBar } from "./ui/anime-navbar"
import { Name, Identity, Badge, EthBalance, Address, Avatar, } from "@coinbase/onchainkit/identity";
import { useAccount } from "wagmi";
import {
  ConnectWallet,
  ConnectWalletText,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import SlideArrowButton from "./ui/button-ui";
import { color } from "@coinbase/onchainkit/theme";



const SCHEMA_UID =
  "0x7889a09fb295b0a0c63a3d7903c4f00f7896cca4fa64d2c1313f8547390b7d39";

const items = [
  {
    name: "Home",
    url: "/",
    href: "/",
    icon: Home,
  },
  {
    name: "Login",
    url: "",
    href: "",
    icon: FileText,
  },
  {
    name: "Services",
    url: "/",
    href: "/",
    icon: CreditCard,
  },
  {
    name: "About",
    url: "#",
    href: "#",
    icon: Info,
  },
]

export function NavBar() {
  return <AnimeNavBar items={items} defaultActive="Home" />;
}

export function Auth() {
    const { address } = useAccount();

    return (
    <><div className=" text-white">
        <Wallet>
        <ConnectWallet>
            {address ? 'Logout' : <SlideArrowButton text="Login"/>}
        </ConnectWallet>
        <WalletDropdown className="text-white bg-black">
          <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
            <Avatar />
            <Name />
            <Address className={color.foregroundMuted} />
          </Identity>
          <WalletDropdownDisconnect />
        </WalletDropdown>
        </Wallet>
        </div><div className="">
                {address ? (
                    <Identity
                        address={address}
                        schemaId={SCHEMA_UID}
                        className="!bg-inherit p-0 [&>div]:space-x-2"
                    >
                        <Name className="text-inherit">
                            <Badge
                                tooltip="High Scorer"
                                className="!bg-inherit high-score-badge" />
                        </Name>
                    </Identity>
                ) : (
                    <div className="pl-2 pt-1 text-gray-500 text-sm font-semibold">
                        NOT CONNECTED
                    </div>
                )}
            </div>
        </>
    )
}
