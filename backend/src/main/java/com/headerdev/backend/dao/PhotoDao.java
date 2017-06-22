package com.headerdev.backend.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.headerdev.backend.model.Photo;
import com.headerdev.backend.model.User;

@Repository
public interface PhotoDao extends CrudRepository<Photo, Long>{

	Photo save(Photo photo);

	List<Photo> findByUser(User user);

	Photo findByPhotoId(Long photoId);

	List<Photo> findAll();

	
}