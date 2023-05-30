"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_category_dto_1 = require("./dto/create-category.dto");
const locations_service_1 = require("./locations.service");
let LocationsController = class LocationsController {
    constructor(locationsService) {
        this.locationsService = locationsService;
    }
    getAll() {
        return this.locationsService.getAll();
    }
    create(createLocationDto) {
        return this.locationsService.create(createLocationDto);
    }
};
__decorate([
    (0, common_1.Get)("getLocations"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocationsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)("addLocation"),
    (0, swagger_1.ApiBody)({ type: create_category_dto_1.CreateLocationDto }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Запись города на базу .',
        type: create_category_dto_1.CreateLocationDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_dto_1.CreateLocationDto]),
    __metadata("design:returntype", Promise)
], LocationsController.prototype, "create", null);
LocationsController = __decorate([
    (0, common_1.Controller)('locations'),
    (0, swagger_1.ApiTags)("Locations"),
    __metadata("design:paramtypes", [locations_service_1.LocationsService])
], LocationsController);
exports.LocationsController = LocationsController;
//# sourceMappingURL=locations.controller.js.map