using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace netwithmongo.BusinessEntities.Entities
{
    [BsonIgnoreExtraElements]
    public class SecretQuestionValidateRequest
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id  { get; set; }
        public int UserId  { get; set; }
        public int SecretQuestionId  { get; set; }
        public string Answer  { get; set; }
        
    }

}
