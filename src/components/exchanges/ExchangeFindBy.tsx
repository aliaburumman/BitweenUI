import {ChoiceEditor} from "../common/forms/ChoiceEditor"
import {DateTimeRange} from "../common/forms/DateTimeRangeEditor"
import FormField from "../common/forms/FormField"
import TextEditor from "../common/forms/TextEditor"
import SubscriptionSelector from "../Subscriptions/SubscriptionSelector"
import DateEditor from "src/components/common/forms/DateEditor";


type DeliveryStatus = {
    id: string
    title: string
}

export type ExchangeFindBySpecs = {
    subscription?: string
    status?: string
    creationTimeWindow: DateTimeRange
    id?: string
    correlationId?: string
    promotedProperties?: string
}

interface Props {
    value: ExchangeFindBySpecs
    onChange: (value: ExchangeFindBySpecs) => void
    onFindRequested: () => void
}

export const ExchangeFindBy: React.FC<Props> = ({value, onChange, onFindRequested}) => {

    const handleFind = (e: any) => {
        e.preventDefault();
        onFindRequested();
    }

    return (
        <div className="flex w-100   py-8">
            <div className={"flex flex-col w-full  "}>
                <div className="flex w-full gap-3 flex-wrap items-end  mb-2 ">
                    <FormField title="Target Subscription" className={"min-w-[350px]"}>
                        <SubscriptionSelector
                            value={value.subscription}
                            onChange={subscription => onChange({...value, subscription})}/>
                    </FormField>

                    <FormField title="Delivery Status">
                        <ChoiceEditor
                            placeholder="Select Status"
                            value={value.status}
                            onChange={status => onChange({...value, status})}
                            optionTitle={(item: DeliveryStatus) => item.title}
                            optionValue={(item: DeliveryStatus) => item.id}
                            options={[
                                {id: "0", title: "Running"},
                                {id: "1", title: "Success"},
                                {id: "2", title: "Bad response"},
                                {id: "3", title: "Failed"}
                            ]}/>
                    </FormField>

                    <FormField title="ID">
                        <TextEditor placeholder="ID" value={value.id} onChange={(t) => onChange({...value, id: t})}/>
                    </FormField>
                    <FormField title="Correlation ID">
                        <TextEditor placeholder="Correlation ID" value={value.correlationId}
                                    onChange={(t) => onChange({...value, correlationId: t})}/>
                    </FormField>
                    <FormField title="Promoted Properties" className={"grow"}>
                        <TextEditor placeholder="Promoted Properties" value={value.promotedProperties}
                                    onChange={(t) => onChange({...value, promotedProperties: t})}/>
                    </FormField>


                </div>
                <div className={"flex flex-row justify-between items-end p-1"}>
                    <div className={"flex gap-3"}>
                        <FormField title="Creation Time From">
                            <DateEditor onChange={(t) => onChange({
                                ...value, creationTimeWindow: {
                                    ...value.creationTimeWindow,
                                    from: t
                                }
                            })} value={value.creationTimeWindow.from}/>
                        </FormField>
                        <FormField title="Creation Time To">
                            <DateEditor onChange={(t) => onChange({
                                ...value, creationTimeWindow: {
                                    ...value.creationTimeWindow,
                                    to: t
                                }
                            })} value={value.creationTimeWindow.to}/>
                        </FormField>
                    </div>


                    <div>
                        <button
                            onClick={handleFind}
                            className="block appearance-none border bg-blue-900 hover:bg-blue-900 text-white py-2 px-4 rounded drop-shadow-sm focus:drop-shadow-lg focus:outline-none">
                            Find
                        </button>   
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

