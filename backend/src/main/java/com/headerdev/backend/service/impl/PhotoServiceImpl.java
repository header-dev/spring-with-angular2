package com.headerdev.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.headerdev.backend.dao.PhotoDao;
import com.headerdev.backend.model.Photo;
import com.headerdev.backend.model.User;
import com.headerdev.backend.service.PhotoService;

@Service
public class PhotoServiceImpl implements PhotoService {

	@Autowired
	private PhotoDao photoDao;

	public Photo save(Photo photo) {
		System.out.println("Final Like :"+photo.getLikes());
		return photoDao.save(photo);
	}

	public List<Photo> findByUser(User user) {
		
		return photoDao.findByUser(user);
	}

	public Photo findByPhotoId(Long photoId) {
//		System.out.println(photoDao.findByPhotoId(photoId).toString());
		return photoDao.findByPhotoId(photoId);
	}

	@Override
	public List<Photo> findAll() {
		// TODO Auto-generated method stub
		return photoDao.findAll();
	}
	
	

}