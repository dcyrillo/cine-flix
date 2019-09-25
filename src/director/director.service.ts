import { Injectable } from '@nestjs/common';
import { DirectorRepository } from './director.repository';
import { CreateDirectorDto } from './Dto/create-director.dto';
import { Director } from './director.entity';

@Injectable()
export class DirectorService {
  constructor(private readonly directorRepository: DirectorRepository) {}

  async create(director: CreateDirectorDto) {
    
    const auxDirector = new Director().createFromDto(director);
    return this.directorRepository.save(auxDirector).then(data => {
      auxDirector.id=data.id;
      return auxDirector;
    });
  }

  async delete(id: string): Promise<void> {
    this.directorRepository.delete(id);
  }

  async findAll(): Promise<Director[]> {
    return this.directorRepository.find();
  }

  async findOne(id: string): Promise<Director> {
    return this.directorRepository.findOne(id);
  }

  async update(id: string, director: CreateDirectorDto): Promise<Director> {
    if (await this.directorRepository.findOne(id)) {
      director.id = id;
      return this.directorRepository.save(director);
    } else {
      return undefined;
    }
  }
}
