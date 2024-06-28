import { useContext } from "react"
import TabTest from "../CustomTabs/tabTest"
import LightDarkMode from "../ThemeSwitcher/mode"
import ImageSlider from "../imageSlider/slider"
import StarRating from "../star-rating/star"
import { FlagsContext } from "./context/context"
import Accordian from "../accordian/acc"
import RandomColor from "../random-color/color"
import LoadMoreData from "../load-more-data/load"
import TreeNavMenu from "../TreeViewNavMenu/NavMenu"
import menus from "../TreeViewNavMenu/menuData"
import QRCodeGen from "../QR-Code-Generator/code"
import ScrollBarIndicator from "../Scroll-Bar-Indicator/scroll"
import PopupTest from "../popupModal/popupTest"
import GithubProfileFinder from "../GithubProfileFinder"
import SearchOptimize from "../SearchOptimization/search"
import TicTacToe from "../TicTacToe"


export default function FeatureFlags() {
    const { loading, enabledFlags } = useContext(FlagsContext)

    const RenderingComponents = [
        {
            key: 'showAccordian',
            component: < Accordian />
        },
        {
            key: 'showRandomColor',
            component: <RandomColor />
        },
        {
            key: 'showStarRating',
            component: <StarRating />
        },
        {
            key: 'showImageSlider',
            component: <ImageSlider url={"https://picsum.photos/v2/list"} page={2} limit={10} />
        },
        {
            key: 'showLoadMoreData',
            component: <LoadMoreData />
        },
        {
            key: 'showTreeNavMenu',
            component: <TreeNavMenu Menus={menus} />
        },
        {
            key: 'showQRCodeGenerator',
            component: <QRCodeGen />
        },
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode />
        },
        {
            key: 'showScrollBar',
            component: <ScrollBarIndicator url={'https://dummyjson.com/products?limit=100'} />
        },
        {
            key: 'showCustomTabs',
            component: <TabTest />
        },
        {
            key: 'showPopUpModal',
            component: <PopupTest />
        },
        {
            key: 'showGithubProfileFinder',
            component: <GithubProfileFinder />
        },
        {
            key: 'showSearchOptimization',
            component: <SearchOptimize />
        },
        {
            key: 'showTicTacToe',
            component: <TicTacToe />
        }
    ]

    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags[getCurrentKey]
    }

    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <h1>Feature-Flag</h1>
            {
                RenderingComponents.map(componentItem => checkEnabledFlags(componentItem.key) ? componentItem.component : null)
            }
        </div>
    )
}