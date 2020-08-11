import React from 'react'
import {AppContext} from '../provider'
import Table from './Table'

export default function Container() {
    return (
       <section className="table-data">
           <AppContext.Consumer>
                {
                    value => <Table value={value} />
                }
            </AppContext.Consumer>
       </section>
    )
}
