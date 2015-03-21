exports.models = {
  "User": {
  "properties" : {
    "id" : {
      "type" : "integer",
      "format" : "int64"
    },
    "username" : {
      "type" : "string"
    },
    "firstName" : {
      "type" : "string"
    },
    "lastName" : {
      "type" : "string"
    },
    "email" : {
      "type" : "string"
    },
    "password" : {
      "type" : "string"
    },
    "phone" : {
      "type" : "string"
    },
    "userStatus" : {
      "type" : "integer",
      "format" : "int32",
      "description" : "User Status"
    }
  },
  "id" : "User"
},"Charity": {
  "required" : [ "address", "name" ],
  "properties" : {
    "id" : {
      "type" : "integer",
      "format" : "int64"
    },
    "name" : {
      "type" : "string",
      "example" : "Restos du Coeur"
    },
    "address" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "tags" : {
      "type" : "array",
      "items" : {
        "$ref" : "Tag"
      }
    }
  },
  "id" : "Charity"
},"Tag": {
  "properties" : {
    "id" : {
      "type" : "integer",
      "format" : "int64"
    },
    "name" : {
      "type" : "string"
    }
  },
  "id" : "Tag"
},"Mission": {
  "properties" : {
    "id" : {
      "type" : "integer",
      "format" : "int64"
    },
    "name" : {
      "type" : "string"
    },
    "description" : {
      "type" : "string"
    },
    "duration" : {
      "type" : "string",
      "format" : "date-time"
    },
    "startData" : {
      "type" : "string",
      "format" : "date-time"
    },
    "location" : {
      "$ref" : "Location"
    },
    "nbMaxParticipants" : {
      "type" : "integer",
      "format" : "int32"
    },
    "idCharity" : {
      "type" : "integer",
      "format" : "int64"
    },
    "idParticipants" : {
      "type" : "array",
      "items" : {
        "type" : "integer",
        "format" : "int64"
      }
    },
    "tags" : {
      "type" : "array",
      "items" : {
        "$ref" : "Tag"
      }
    },
    "status" : {
      "type" : "string"
    }
  },
  "id" : "Mission"
},"Location": {
  "id" : "Location"
}
}