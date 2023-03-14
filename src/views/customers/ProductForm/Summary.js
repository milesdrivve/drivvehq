import React from 'react'
import { AdaptableCard } from 'components/shared'
import { Alert } from 'components/ui'

const Summary = (props) => {
    const { touched, errors } = props

    return (
        <AdaptableCard className="mb-4" divider isLastChild>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div className="col-span-1 col-end-3">
                <h5>Summary</h5>
                <p>&nbsp;</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div className="col-span-1 col-end-3">
                  <div className="mb-4">
                      <Alert type="danger">
                          Missing documents
                      </Alert>
                  </div>
                  <div className="mb-4">
                      <Alert type="danger">
                          Missing drivers licence
                      </Alert>
                  </div>
              </div>
            </div>
        </AdaptableCard>
    )
}

export default Summary