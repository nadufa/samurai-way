import React, {ChangeEventHandler, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    const [editMode, setEditmode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditmode(true)
    }

    const deactivateEditMode = () => {
        setEditmode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: any) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {
                !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '-------'}</span>
                </div>
            }

            {
                editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                           value={status}></input>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;