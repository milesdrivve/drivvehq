```jsx
import React from 'react'
import classNames from 'classnames'
import { Segment } from 'components/ui'
import { HiCheckCircle } from 'react-icons/hi'
import isLastChild from 'utils/isLastChild'

const segmentSelections = [
    { value: 'Personal', desc: 'The plan for personal.', disabled: false },
    { value: 'Team', desc: 'The plan for team', disabled: false },
    {
        value: 'Business',
        desc: 'Talk to us for business plan.',
        disabled: true,
    },
]

const Custom = () => {
    return (
        <Segment defaultValue={['Team']} className="gap-2 md:flex-row flex-col">
            {segmentSelections.map((item, index) => (
                <Segment.Item
                    value={item.value}
                    key={item.value}
                    disabled={item.disabled}
                >
                    {({ ref, active, value, onSegmentItemClick, disabled }) => {
                        return (
                            <div
                                ref={ref}
                                className={classNames(
                                    'flex',
                                    'ring-1',
                                    'justify-between',
                                    'border',
                                    'rounded-md ',
                                    'border-gray-300',
                                    'py-5 px-4',
                                    'cursor-pointer',
                                    'select-none',
                                    'w-100',
                                    'md:w-[260px]',
                                    active
                                        ? 'ring-cyan-500 border-cyan-500'
                                        : 'ring-transparent',
                                    disabled
                                        ? 'opacity-50 cursor-not-allowed'
                                        : 'hover:ring-cyan-500 hover:border-cyan-500'
                                )}
                                onClick={onSegmentItemClick}
                            >
                                <div>
                                    <h6>{value}</h6>
                                    <p>{item.desc}</p>
                                </div>
                                {active && (
                                    <HiCheckCircle className="text-cyan-500 text-xl" />
                                )}
                            </div>
                        )
                    }}
                </Segment.Item>
            ))}
        </Segment>
    )
}

export default Custom
```
