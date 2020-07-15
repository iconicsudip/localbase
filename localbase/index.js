"use strict"

// TODO: fix not resetting (not firing reset method)
// TODO: Get, Update, Set or Delete a Document by key (instead of by document criteria)

// TODO: update - add then block response
// TODO: set - add then block response
// TODO: delete - add then block response
// TODO: error handling

// TODO: database editor

import * as localForage from "localforage";

// import api methods
import collection from './api/selectors/collection'
import doc from './api/selectors/doc'

import orderBy from './api/filters/orderBy'
import limit from './api/filters/limit'

import get from './api/actions/get'
import add from './api/actions/add'
import update from './api/actions/update'
import set from './api/actions/set'
import deleteIt from './api/actions/delete'

// import api utils
import reset from './api-utils/reset'

// Localbase
class Localbase {
  constructor(dbName) {
    localForage.config({
      driver      : localForage.INDEXEDDB,
      name        : dbName
    });

    // properties
    this.dbName = dbName
    this.collectionName = null
    this.editType = 'db' // 'db' | 'collection' | 'doc'
    this.orderByProperty = null
    this.orderByDirection = null
    this.limitBy = null
    this.docSelectionCriteria = null
    this.docUpdates = null

    // api
    this.collection = collection.bind(this)
    this.doc = doc.bind(this)

    this.orderBy = orderBy.bind(this)
    this.limit = limit.bind(this)

    this.get = get.bind(this)
    this.add = add.bind(this)
    this.update = update.bind(this)
    this.set = set.bind(this)
    this.delete = deleteIt.bind(this)
    
    // api utils
    this.reset = reset.bind(this)
  }
}

export default Localbase