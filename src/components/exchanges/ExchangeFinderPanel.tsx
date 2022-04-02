import Tab from "../common/forms/Tab";
import TabNavigator from "../common/forms/TabNavigator";
import { ExchangeFindBy, ExchangeFindBySpecs } from "./ExchangeFindBy";
import { ExchangeKeywordSearch } from "./ExchangeKeywordSearch";


type ExchangeFindMode = "keyword" | "findby" | "advanced";

export type ExchangeSpecs = {
    findMode: ExchangeFindMode
    keywords: string
    findBy: ExchangeFindBySpecs
}

interface Props {
    value: ExchangeSpecs
    onChange: (value:ExchangeSpecs) => void
    onFindRequested: (specs:ExchangeSpecs) => void
}

export const ExchangeFinderPanel:React.FC<Props> = ({
    value,
    onChange,
    onFindRequested
}) => {

    const { findMode } = value;

    const handleModeChange = (findMode: ExchangeFindMode) => {
        onChange({ ...value, findMode });
    }

    return (
        <>
            <TabNavigator className="w-full">
                <Tab key="keyword" selected={findMode==='keyword'} onClick={() => handleModeChange("keyword")}>Keyword Search</Tab>
                <Tab key="findby" selected={findMode==='findby'} onClick={() => handleModeChange("findby")}>Find By</Tab>
                <Tab key="advanced" selected={findMode==='advanced'} onClick={() => handleModeChange("advanced")}>Advanced Search</Tab>
            </TabNavigator>
            
            {(findMode==='keyword') &&
                <ExchangeKeywordSearch
                    value={value.keywords}
                    onChange={keywords => onChange({ ...value, keywords })}
                    onFindRequested={keywords => onFindRequested({ ...value, keywords })} />
            }

            {(findMode==='findby') && 
                <ExchangeFindBy 
                    value={value.findBy} 
                    onChange={findBy => onChange({ ...value, findBy })}
                    onFindRequested={findBy => onFindRequested({ ...value, findBy })} />}

        </>
    )
}



