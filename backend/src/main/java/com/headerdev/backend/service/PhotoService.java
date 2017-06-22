package com.headerdev.backend.service;

import java.util.List;

import com.headerdev.backend.model.Photo;
import com.headerdev.backend.model.User;

public interface PhotoService {

	Photo save(Photo photo);
	
	List<Photo> findByUser(User user);
	
	Photo findByPhotoId(Long photoId);
	
	List<Photo> findAll();
	
}
