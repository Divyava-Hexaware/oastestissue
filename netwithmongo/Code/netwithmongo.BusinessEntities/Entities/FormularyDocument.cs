using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace netwithmongo.BusinessEntities.Entities
{
    [BsonIgnoreExtraElements]
    public class FormularyDocument
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id  { get; set; }
        public int DocumentID  { get; set; }
        public string FormularyID  { get; set; }
        public string RxCUI  { get; set; }
        public string Description  { get; set; }
        public string DocumentName  { get; set; }
        public string LanguageType  { get; set; }
        public string GPI  { get; set; }
        public DateTime CreatedDate  { get; set; }
        public string DocumentType  { get; set; }
        
    }

}
