using netwithmongo.BusinessEntities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace netwithmongo.Data.Interfaces
{
    public interface IFormularyDocumentRepository : IGetAll<FormularyDocument>,IGet<FormularyDocument,string>, ISave<FormularyDocument>, IUpdate<FormularyDocument, string>, IDelete<string>
    {
    }
}
