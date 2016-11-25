import * as React from 'react'
import * as typings from './call.type'
import { observer, inject } from 'mobx-react'

import Input from '../../../../../../../web-common/input/index'

import * as EditorManager from '../../../../../gaea-editor-manager/gaea-editor-manager'
import Action from '../../action'

import './call.scss'

@inject('ViewportStore', 'EditorEventAction') @observer
export default class Call extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    handleChange(value: string) {
        //this.props.viewport.prepareWriteHistory()
        const eventData = this.props.isWeb ? 'gaeaEventData' : 'gaeaNativeEventData'
        this.props.EditorEventAction.updateEventData(this.props.ViewportStore.currentEditComponentMapUniqueKey, `${eventData}.${this.props.index}.eventData.url`, value)
        // this.props.viewport.writeHistory()
    }

    render() {
        const customData = this.props.isWeb ? this.props.ViewportStore.currentEditComponentInfo.props.gaeaEventData[this.props.index].eventData as FitGaea.EventActionCall : this.props.ViewportStore.currentEditComponentInfo.props.gaeaNativeEventData[this.props.index].eventData as FitGaea.EventActionCall

        return (
            <div></div>
        )
    }
}