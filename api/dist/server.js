"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const all_1 = require("./data/all");
const rock_1 = require("./data/rock");
const metal_1 = require("./data/metal");
const pop_1 = require("./data/pop");
const app = (0, express_1.default)();
const port = 5000;
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
}));
/* ***************************************************************************** */
//GET, tutti gli artisti
app.get('/artists/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, name } = req.query;
    const pageNumber = parseInt(page, 10) || 1;
    const itemsPerPage = 12;
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    try {
        let filteredArtists = all_1.alldata;
        if (name) {
            const searchTerm = name.toString().toLowerCase();
            filteredArtists = all_1.alldata.filter((artist) => artist.info.name.toLowerCase().includes(searchTerm));
        }
        const paginatedItems = filteredArtists.slice(startIndex, endIndex);
        const totalItems = filteredArtists.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        res.json({
            items: paginatedItems,
            currentPage: pageNumber,
            totalPages: totalPages,
            totalItems: totalItems
        });
    }
    catch (err) {
        console.error('Errore durante la richiesta GET degli artisti:', err);
        res.status(500).json({ error: 'Errore durante la richiesta GET degli artisti' });
    }
}));
//GET, artisti rock
app.get('/artists/rock', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(rock_1.rockdata);
    }
    catch (err) {
        console.error('Errore durante la richiesta GET degli artisti:', err);
        res.status(500).json({ error: 'Errore durante la richiesta GET degli artisti' });
    }
}));
//GET, artisti metal
app.get('/artists/metal', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(metal_1.metaldata);
    }
    catch (err) {
        console.error('Errore durante la richiesta GET degli artisti:', err);
        res.status(500).json({ error: 'Errore durante la richiesta GET degli artisti' });
    }
}));
//GET, artisti pop
app.get('/artists/pop', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(pop_1.popdata);
    }
    catch (err) {
        console.error('Errore durante la richiesta GET degli artisti:', err);
        res.status(500).json({ error: 'Errore durante la richiesta GET degli artisti' });
    }
}));
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server API running on http://localhost:${port}`);
    try {
        // await mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB}`);
        //console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
}));
