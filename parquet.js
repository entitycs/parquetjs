const reader = require('./lib/reader');
const writer = require('./lib/writer');
const schema = require('./lib/schema');
const shredder = require('./lib/shred');
const util = require('./lib/util');

// per https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
//eslint-disable-next-line no-extend-native, max-statements-per-line
BigInt.prototype.toJSON = function () { return this.toString(); };

module.exports = {
  ParquetEnvelopeReader: reader.ParquetEnvelopeReader,
  ParquetReader: reader.ParquetReader,
  ParquetEnvelopeWriter: writer.ParquetEnvelopeWriter,
  ParquetWriter: writer.ParquetWriter,
  ParquetTransformer: writer.ParquetTransformer,
  ParquetSchema: schema.ParquetSchema,
  ParquetShredder: shredder,
  force32: util.force32
};
