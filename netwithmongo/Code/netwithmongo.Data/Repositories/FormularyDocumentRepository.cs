using netwithmongo.Data.Interfaces;
using netwithmongo.BusinessEntities.Entities;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Core.Bindings;
using System;
using System.Collections.Generic;
using System.Text;

namespace netwithmongo.Data.Repositories
{
    public class FormularyDocumentRepository : IFormularyDocumentRepository
    {
        private readonly IGateway _gateway;
        private readonly string _collectionName = "FormularyDocument";

        public FormularyDocumentRepository(IGateway gateway)
        {
            _gateway = gateway;
        }
        public IEnumerable<FormularyDocument> GetAll()
        {
            var result = _gateway.GetMongoDB().GetCollection<FormularyDocument>(_collectionName)
                            .Find(new BsonDocument())
                            .ToList();
            return result;
        }

        public FormularyDocument Get(string id)
        {
            var result = _gateway.GetMongoDB().GetCollection<FormularyDocument>(_collectionName)
                            .Find(x => x.Id == id).Single();
            return result;
        }

        public bool Save(FormularyDocument entity)
        {
            _gateway.GetMongoDB().GetCollection<FormularyDocument>(_collectionName)
                .InsertOne(entity);
            return true;
        }

        public FormularyDocument Update(string id, FormularyDocument entity)
        {
            var update = Builders<FormularyDocument>.Update
                .Set(e => e.DocumentID, entity.DocumentID )
                .Set(e => e.FormularyID, entity.FormularyID )
                .Set(e => e.RxCUI, entity.RxCUI )
                .Set(e => e.Description, entity.Description )
                .Set(e => e.DocumentName, entity.DocumentName )
                .Set(e => e.LanguageType, entity.LanguageType )
                .Set(e => e.GPI, entity.GPI )
                .Set(e => e.CreatedDate, entity.CreatedDate )
                .Set(e => e.DocumentType, entity.DocumentType );

            var result = _gateway.GetMongoDB().GetCollection<FormularyDocument>(_collectionName)
                .FindOneAndUpdate(e => e.Id == id, update);
            return result;
        }

        public bool Delete(string id)
        {
            var result = _gateway.GetMongoDB().GetCollection<FormularyDocument>(_collectionName)
                         .FindOneAndDelete(e => e.Id == id);
            if(result==null) return false;             
            return true;
        }
    }
}
