declare module 'keystone' {
  import * as Express from 'express'
  import * as Mongoose from 'mongoose'

  class Content {
    Page: any

    Types: any

    fetch(page, callback)

    store(page, content, callback)

    page(key, page)

    initModel()

    editable(user, options)
  }

  interface KeystoneUtiils {

  }

  interface KeystoneStartEvents {
    onStart?: () => void
    onMount?: () => void
    onHttpServerCreated?: () => void
    onHttpsServerCreated?: () => void
    onSocketServerCreated?: () => void
  }

  interface KeystoneInitOptions {
    name?: string
    brand?: string
    'admin path'?: string
    comporess?: boolean
    headless?: boolean
    logger?: string
    session?: boolean
    auth?: boolean
    'auto update'?: boolean
    updates?: string
    'model prefix'?: string
    'user model'?: string
    'module root'?: string
    'frame guard'?: string
    mongo?: string
    'cookie secret'?: string
  }

  interface KeystoneListOptions {
    schema?: any
    noedit?: boolean
    nocreate?: boolean
    nodelete?: boolean
    autocreate?: boolean
    sortable?: boolean
    hidden?: boolean
    track?: boolean
    inherits?: boolean
    perPage?: number
    searchFields?: string
    searchUsesTextIndex?: boolean
    defaultSort?: string
    defaultColumns?: string
  }

  namespace keystone {
    class List {
      constructor(key: string, options?: KeystoneListOptions)

      schema: Mongoose.Schema

      model: Mongoose.Model<any>

      defaultColumns: string

      register()

      add(value: any, prefix?: string, ...other)
    }

    const Field: {
      Types: {
        AzureFile: any
        Boolean: any
        CloudinaryImage: any
        CloudinaryImages: any
        Code: any
        Color: any
        Date: any
        DateArray: any
        Datetime: any
        Email: any
        Embedly: any
        File: any
        GeoPoint: any
        Html: any
        Key: any
        LocalFile: any
        LocalFiles: any
        Location: any
        Markdown: any
        Money: any
        Name: any
        Number: any
        NumberArray: any
        Password: any
        Relationship: any
        S3File: any
        Select: any
        Text: any
        TextArray: any
        Textarea: any
        Url: any
      }
    }

    const express: Express.Application

    const mongoose: Mongoose.Mongoose

    const utils: KeystoneUtiils

    const content: Content

    function list(key: string): List

    function init(options: KeystoneInitOptions)

    function set(name: string, value: any)

    function get(name: string)

    function start(events: KeystoneStartEvents | (() => void))

    function importer(path: string)
  }

  export = keystone
}